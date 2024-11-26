import Image from "next/image";
import Nav from "@/app/components/nav";
import Title from "@/app/components/title";
import gradientGridImage from "@/app/images/grid-gradiant.webp"
import PresentationCard from "./presentation-card";

export default function Header() {
  return (
    <div className={`
      relative
      min-h-[800px]
      flex
      justify-center
    `}>
      <div style={{
        backgroundImage: `url(${gradientGridImage.src})`,
      }} className={`
      absolute
      inset-0
      -z-40
      w-full
      h-full

      bg-bottom
      bg-cover
      bg-no-repeat

      border-b
      border-foreground

      opacity-30
    `}>
      </div>
      <div className={`
        absolute
        inset-0
        -z-50
        w-full
      `}>
        <div className={`
            absolute
            top-[100px]
            right-[250px]
            w-[400px]
            h-[220px]
            bg-blue-600/35
            rounded-full
            blur-[120px]
          `}></div>
        <div className={`
            absolute
            hidden
            md:inline-block
            md:bottom-[50px]
            md:left-[150px]
            md:w-[300px]
            md:h-[600px]
            bg-pink-600/20
            blur-[120px]
            -rotate-45
            rounded-full
          `}></div>
      </div>
      <header className={`
      w-[90%]
      md:w-[700px]
      flex
      flex-col
      items-center
    `}>
        <Nav />
        <div className={`
          h-full
          flex
          flex-col
          gap-4
          
          pt-20
        `}>
          <div className={`
              h-52
              flex
              items-center
              px-4

            `}>
            <Title />
          </div>
          <div>
            <PresentationCard></PresentationCard>
          </div>
          <div className={`
              h-12
            `}></div>
        </div>
      </header >
    </div>
  )
}