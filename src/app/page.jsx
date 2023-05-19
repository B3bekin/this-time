import React from "react";

function Home() {

  return (
    <div className="bg-violet-300 min-h-screen">
      <div className="bg-white flex justify-evenly items-center">

        <div className="font-extrabold text-4xl flex justify-end flex-col text-[#FF4A4A]">
          <h1 className="bg-green-100">SVEZ</h1>
          <h1 className="bg-green-200 max-w-fit">.SE</h1>
        </div>

        <ul className="text-2xl font-light">
          Aplikace
        </ul>

        <ul className="text-2xl font-light">
          Pro ridice
        </ul>

        <ul className="text-2xl font-light">
          Kontakty
        </ul>

        <p>🎈🔽</p>

        <div className="bg-[#FF4A4A] text-white py-2 px-5 rounded-md text-center flex align-bottom">Objednat jízdu</div>

      </div>

      <div className="bg-[#FF4A4A]">

        <h1 className="text-white font-extrabold">Spolehlivé a bezpečné TAXI po Praze a okolí</h1>

        <p>Objednejte si svoji jízdu:</p>

        <div className="flex flex-col gap-3">
          <div className="bg-white text-[#FF4A4A] py-3 px-5 font-extrabold"> 
            {/*<p>icon</p>*/}
            <p>222 111 000</p>
          </div>

          <div className="bg-white text-[#FF4A4A] py-3 px-5 font-extrabold">
            <p> Objednejte online</p>
          </div>

          <div className="bg-white text-[#FF4A4A] py-3 px-5 font-extrabold">
            <p>Stáhnout aplikaci</p>
          </div>

          <div>
            <div>Google play</div>
            <div>Apple store</div>
          </div>
        </div>



      </div>


    </div>
  )
}

export default Home