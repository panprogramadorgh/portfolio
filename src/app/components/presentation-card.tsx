import Image from "next/image"
import profileLogo from "@/app/images/profile-logo.webp"

export default function PresentationCard() {

  return (
    <div className={`
      w-full
      flex
      justify-start
    `}>
      <div className={`
          relative
          flex
          justify-evenly
          flex-wrap
          p-6
      `}>
        <div
          style={{ animation: "presentation-card-animation-1 ease-in-out 0.4s", animationFillMode: "forwards" }}
          className={`
            absolute
            inset-0
            -z-20
            w-[300px]
            bg-background
            backdrop-blur-xl
            rounded-xl
            shadow-2xl
            border-t
            border-card
          `}>
        </div>
        <div className={`
          relative
          min-w-32
          min-h-32
        `}>
          <div className={`
            absolute
            w-full
            h-full
            inset-0
          bg-white
            p-0
            rounded-full
            shadow-xl
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
        <div className={`
            flex
            items-center
            py-4
          `}>
          <h2 className={`
          text-[2.2rem]
          md:text-[2.7rem]
          text-nowrap
          overflow-hidden
        `}>Alvaro Barrero</h2>
        </div>
      </div>
    </div>
  )
}