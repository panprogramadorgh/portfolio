interface Action {
  type: number
}

// Funciones que efectuan animaciones sobre el texto
export type ChainAnimationBuilder<ReducerState, ReducerAction extends Action, AnimationAction extends Action> = (options: {
  action: AnimationAction
  state: {
    value: ReducerState,
    dispatcher: React.Dispatch<ReducerAction>
  },
  duration: number,
  animationTimeouts: NodeJS.Timeout[],
  next?: () => void
}) => () => void;