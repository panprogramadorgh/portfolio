import Header from "@/app/components/header/header"

export default function Home() {
  return (
    <>
      <Header />
      <div className={`
          flex
          justify-center
        `}>
        <main className={`
          w-[90%]
          md:w-[700px]
          pt-20
        `}>
          <h1>Hello World</h1>
          <h2>Hello World</h2>
          <h3>Hello World</h3>
          <h4>Hello World</h4>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quas odio impedit ipsa vel magnam illum iusto numquam sed placeat!</p>
        </main>
      </div>
    </>
  )
}