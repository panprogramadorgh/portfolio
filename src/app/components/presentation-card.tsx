'use client'

import { useReducer } from "react"
import Image from "next/image"
import profileLogo from "@/app/images/profile-logo.webp"
import { ChainAnimationBuilder } from "@/utils/chain-animation";

interface CardInfo {
  width: number;
}

enum CardActionTypes {
  Narrow,
  Widen,
}

type CardReducerAction = {
  type: CardActionTypes;
  resize: number
}

const createResizeAnimation: ChainAnimationBuilder<CardInfo, CardAction> = ({ type, state, duration, animationTimeouts, next }) => {
  if (type == CardActionTypes.Narrow && )
}

const cardReducer = (state: CardInfo, action: CardAction) => {
  return { ...state, width: state.width *= action.resize };
}

export default function PresentationCard() {
  const [card, dispatchCard] = useReducer(cardReducer, { width: 1 });

  return (
    <div className={`
      w-[${card.width * 100}%]
      p-6
      bg-background
      backdrop-blur-xl
      rounded-xl
      shadow-2xl
      border-t
      border-card
    `}>
      <div className={`
        relative
        h-32
      `}>
        <div className={`
            absolute
            inset-0
          bg-white
            w-32
            h-32
            p-0
            rounded-full
            shadow-xl
        `}></div>
        <div className={`
          absolute
          inset-0
          left-4
          top-2
        `}>
          <Image width={155} height={155} src={profileLogo.src} alt="profile logo image" />
        </div>
      </div>
      <h2 className={`
        text-[1.8rem]
        md:text-[2.2rem]
      `}>Bienvenido, soy Alvaro</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt porro molestiae consequatur dolorem nobis cumque explicabo numquam nihil non! Eveniet, dicta ex harum nobis cupiditate voluptates quisquam. Ipsa, officiis placeat.</p>
    </div>
  )
}