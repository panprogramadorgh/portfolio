import Nav from "@/app/components/nav";
import Title from "@/app/components/title";

import gradientGridImage from "@/app/images/grid-gradiant.webp"

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
          <Title />
          <div>
            <div className={`
                p-6
              bg-sky-200/5
                backdrop-blur-xl
                rounded-xl
                shadow-2xl
                border-t
                border-slate-200/15
              `}>
              <div className={`
                  flex
                  justify-center
                  py-3
                `}>
                <div className={`
                w-32
                h-32
                bg-sky-200/10
                backdrop-blur-xl
                rounded-full
                shadow-2xl
              `}></div>
              </div>
              <h2 className={`
                  text-[1.8rem]
                  md:text-[2.2rem]
                `}>Bienvenido, soy Alvaro</h2>
              <p className={`
                  text-[1.2rem]
                `}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt porro molestiae consequatur dolorem nobis cumque explicabo numquam nihil non! Eveniet, dicta ex harum nobis cupiditate voluptates quisquam. Ipsa, officiis placeat.</p>
            </div>
          </div>
          <div className={`
              h-12
            `}></div>
        </div>
      </header >
    </div>
  )
}