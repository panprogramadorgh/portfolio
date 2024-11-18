"use client"

import { useReducer, useEffect } from "react"

interface TitleInfo {
  text: string;
  finalText: string;
}

enum TitleActionTypes {
  StepNextChar,
  PopChar
}

type TitleAction =
  | {
    type: TitleActionTypes.StepNextChar;
    nextChar: string;
  }
  | {
    type: TitleActionTypes.PopChar;
  };

interface ChainAnimationAction {
  type: number
}

// Funciones que efectuan animaciones sobre el texto
type ChainAnimationBuilder<AnimationState, AnimationAction extends ChainAnimationAction> = (options: {
  actionType: AnimationAction['type'],
  state: {
    value: AnimationState,
    dispatcher: React.Dispatch<AnimationAction>
  },
  duration: number,
  animationTimeouts: NodeJS.Timeout[],
  next?: () => void
}) => () => void;

const createTitleAnimation: ChainAnimationBuilder<TitleInfo, TitleAction> = ({ actionType, state, duration, animationTimeouts, next }) => {
  const interval = duration / state.value.finalText.length;
  if (actionType == TitleActionTypes.PopChar) {
    return () => {
      let titleIndex = state.value.finalText.length - 1;
      const typing = setInterval(() => {
        if (titleIndex >= 0) { // Eliminar caracteres
          state.dispatcher({
            type: TitleActionTypes.PopChar,
          });
          titleIndex--;
        }
        else {
          clearInterval(typing);
          if (typeof next != 'undefined') {
            next();
          }
        }
      }, interval);
      animationTimeouts.push(typing);
    }
  } else if (actionType == TitleActionTypes.StepNextChar) {
    return () => {
      let titleIndex = 0;
      const typing = setInterval(() => {
        console.log("Ejecucino del intervalo");
        if (titleIndex < state.value.finalText.length) { // Agregar caracteres
          state.dispatcher({
            type: TitleActionTypes.StepNextChar,
            nextChar: state.value.finalText[titleIndex]
          });
          titleIndex++;
        }
        else {
          clearInterval(typing);
          if (typeof next != 'undefined') {
            next();
          }
        }
      }, interval);
      animationTimeouts.push(typing);
    }
  }
  else {
    throw new Error(`Invalid action type: ${actionType}`);
  }
}

const titleReducer = (state: TitleInfo, action: TitleAction) => {
  const newState = { ...state };
  if (action.type === TitleActionTypes.StepNextChar) {
    newState.text += action.nextChar;
  }
  else if (action.type === TitleActionTypes.PopChar) {
    newState.text = newState.text.substring(0, newState.text.length - 1);
  }
  else {
    throw new Error(`Invalid action type: ${action}`)
  }
  return newState;
}

export default function Title() {
  const [title, dispatchTitle] = useReducer(titleReducer, { text: "", finalText: "Desarrollador de Software" });
  /* El motivo de esta funcion no es otro que evitar el error de compilacion de vercel. De esta manera evitamos colocar title como dependencia en useEffect y con ello actualizaciones innecesarias. */
  const getTitle = () => title;

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    const typingAnimation = createTitleAnimation({
      actionType: TitleActionTypes.StepNextChar,
      state: {
        value: getTitle(),
        dispatcher: dispatchTitle
      },
      animationTimeouts: timeouts,
      duration: 700
    })

    typingAnimation();

    return () => {
      timeouts.forEach(t => {
        clearInterval(t);
      })
    };
  }, []);

  return (
    <div>
      <h1 className={`
          text-[2.2rem]
          sm:text-[3.5rem]
          md:text-[4.2rem]
          text-center
        `}>{title.text}</h1>
    </div>
  )
}