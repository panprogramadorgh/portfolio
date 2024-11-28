"use client"

import Link from "next/link";
import { MouseEventHandler, useContext } from "react";
import { BackdropCtx, useCheckBackdropVisibility } from "../../contexts/backdrop-ctx";

export default function Nav() {
  const backdropVisibleState = useContext(BackdropCtx)
  const backdropVisible = useCheckBackdropVisibility(true);

  const handleThumbClick: MouseEventHandler<HTMLDivElement> = () => {
    if (backdropVisibleState && window.innerWidth < 768) {
      backdropVisibleState[1](prev => !prev);
    }
  }

  return (
    <nav className={`
      fixed
      z-50

      w-[90%]
      md:w-auto
      
      flex
      md:block
      justify-end

      py-4
    `}>
      {backdropVisible ? (
        <div className={`
          absolute
          top-24
      `}>
          <NavDialog />
        </div>
      ) : null}
      <div className={`
        inline-block
        md:block

        hover:bg-sky-200/10        
        bg-sky-200/5

        backdrop-blur-xl
        shadow-xl
        font-semibold
        
        rounded-full
        md:rounded-xl
        
        md:hover:scale-[104%]
        md:hover:translate-y-[5px]

        select-none
        transition-all
        `}>
        <ul className={`
          hidden
          md:flex
          justify-between
          gap-8
          p-0
          md:py-2
          md:px-8
          md:hover:px-12
        `}>
          <li><Link href="">Sobre mi</Link></li>
          <li><Link href="">Habilidades</Link></li>
          <li><Link href="">Contacto</Link></li>
          <li><Link href="">Proyectos</Link></li>
        </ul >
        <div className={`
            flex
            md:hidden
            ${backdropVisible ? "w-24" : "w-20"}
            h-16
            flex-col
            justify-between
            p-5
            cursor-pointer
            transition-all
          `}
          onClick={handleThumbClick}
        >
          <div className={`
              w-full
              h-[2px]
              bg-foreground
            `}></div>
          <div className={`
              w-full
              h-[2px]
              bg-foreground
            `}></div>
        </div>
      </div>
    </nav >
  )
}

function NavDialog() {
  return (
    <div>
      <ul className={`
          w-[250px]
          h-[280px]
          flex
          flex-col
          justify-between
          p-6
          bg-background
          backdrop-blur-xl
          drop-shadow-2xl
          rounded-xl
          border-t
          border-card
          font-semibold
        `}>
        <li><Link href="" className={``}>Sobre mi</Link></li>
        <li><Link href="" className={``}>Habilidades</Link></li>
        <li><Link href="" className={``}>Contacto</Link></li>
        <li><Link href="" className={``}>Proyectos</Link></li>
      </ul >
    </div>
  )
}