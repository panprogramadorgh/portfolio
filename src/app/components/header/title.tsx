"use client"

import { useReducer, useEffect } from "react"
import { ChainAnimationBuilder } from "@/utils/chain-animation";

interface TitleInfo {
  text: string;
}

enum TitleActionTypes {
  StepNextChar,
  PopChar
}

type TitleReducerAction =
  | {
    type: TitleActionTypes.StepNextChar;
    nextChar: string;
  }
  | {
    type: TitleActionTypes.PopChar;
  };

type TitleAnimationAction = {
  type: TitleActionTypes,
  finalText: string;
}

const createTitleAnimation: ChainAnimationBuilder<TitleInfo, TitleReducerAction, TitleAnimationAction> = ({ action, state, duration, animationTimeouts, next }) => {
  const interval = duration / action.finalText.length
  if (action.type == TitleActionTypes.PopChar) {
    return () => {
      let titleIndex = action.finalText.length - 1;
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
  } else if (action.type == TitleActionTypes.StepNextChar) {
    return () => {
      let titleIndex = 0;
      const typing = setInterval(() => {
        if (titleIndex < action.finalText.length) { // Agregar caracteres
          state.dispatcher({
            type: TitleActionTypes.StepNextChar,
            nextChar: action.finalText[titleIndex]
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
    throw new Error(`Invalid action type: ${action.type}`);
  }
}

const titleReducer = (state: TitleInfo, action: TitleReducerAction) => {
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
  const [title, dispatchTitle] = useReducer(titleReducer, { text: "" });

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];

    const typingAnimation = createTitleAnimation({
      action: {
        type: TitleActionTypes.StepNextChar,
        finalText: "Desarrollador de Software"
      },
      state: {
        value: title,
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
          inline-block
          text-[2.2rem]
          sm:text-[3.5rem]
          md:text-[4.2rem]
          text-center
          font-extrabold
          `}>
        <span>{title.text}</span>
        <div className={`
          inline-block
          w-2
          h-12
          `}>
          <div style={{
            animation: "title-blinking-cursor ease 1s infinite"
          }} className={`
              w-full
              h-full
              bg-glow
            `}>
          </div>
        </div>
      </h1>
    </div>
  )
}