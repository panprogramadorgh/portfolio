"use client"

import Link from "next/link";

export default function Nav() {
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
      <div className={`
        inline-block
        md:block

        py-3
        px-6

        md:py-2
        md:px-8
        md:hover:px-12

        hover:bg-sky-200/10
        hover:shadow-lg

        rounded-full
        md:rounded-xl
        

        bg-sky-200/5
        backdrop-blur-xl
        shadow-sm
        font-semibold
        select-none
        hover:px-8
        
        md:hover:scale-[104%]
        md:hover:translate-y-[5px]

        transition-all
        `}>
        <ul className={`
        hidden
        md:flex
        justify-between
        gap-8
      `}>
          <li><Link href="">Sobre mi</Link></li>
          <li><Link href="">Habilidades</Link></li>
          <li><Link href="">Contacto</Link></li>
          <li><Link href="">Proyectos</Link></li>
        </ul >
        <div className={`
            relative
            md:hidden
            w-8
            h-8
          `}>
          <div className={`
              absolute
              top-[33%]
              w-full
              h-[2px]
              bg-foreground
            `}></div>
          <div className={`
              absolute
              top-[66%]
              w-full
              h-[2px]
              bg-foreground
            `}></div>
        </div>
      </div>
    </nav >
  )
}