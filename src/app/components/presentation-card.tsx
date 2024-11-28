import Image from "next/image"
import Link from "next/link"
import profileLogo from "@/app/images/header/profile-logo.webp"
import GithubLogo from "@/app/images/svgs/github.svg"

export default function PresentationCard() {

  return (
    <div className={`
      relative
      flex
      flex-wrap
      justify-evenly
      p-6
  `}>
      <div
        style={{ animation: "presentation-card-widening ease-in-out 0.5s", animationFillMode: "forwards" }}
        className={`
        absolute
        inset-0
        -z-20
        w-[50%]
        bg-background
        backdrop-blur-xl
        rounded-xl
        shadow-2xl
        border-t
        border-card
      `}>
      </div>
      <div
        style={{ animation: "fadein ease-in-out 0.75s", animationFillMode: "forwards" }}
        className={`
          relative
          min-w-32
          min-h-32
      `}>
        <div className={`
            absolute
            w-full
            h-full
            inset-0
            bg-foreground
            p-0
            rounded-full
            shadow-xl
            shadow-neutral-950/35
        `}></div>
        <div className={`
            absolute
            w-full
            h-full
            inset-0
            left-4
            top-4
          `}>
          <Image width={200} height={200} src={profileLogo.src} alt="profile logo image" />
        </div>
      </div>
      <div
        style={{ animation: "fadein ease-in-out 0.75s", animationFillMode: "forwards" }}
        className={`
        flex
        items-center
        py-4
      `}>
        <div className={`
              flex
              flex-col
              justify-center
              items-center
          `}>
          <h2 className={`
          text-[2.5rem]
          md:text-[3rem]
          text-center
          text-glow
          drop-shadow-2xl
        `}>Álvaro Barrero</h2>
          <div className={`
                flex
                flex-wrap
                justify-center
                gap-2
            `}>
            <Link href="https://github.com/panprogramadorgh" target="_blank"><div className={`
                flex
                py-1
                px-4
                gap-2
                bg-background-heavy
                rounded-full
                font-bold
                select-none
              `}>
              <span>GitHub</span>
              <GithubLogo className={`
                  w-6
                  h-6
                  text-foreground
                `} />
            </div></Link>

            <p className={`
              text-foreground-light
            `}>@panprogramadorgh</p>
          </div>
        </div>
      </div>
    </div>
  )
}