import React from "react";

function Home() {

  return(
    <div className="bg-violet-300 min-h-screen">
      <div className="bg-white flex justify-evenly items-center">

        <div className="font-extrabold text-4xl flex flex-col justify-end text-[#FF4A4A]">
          <h1>SVEZ</h1>
          <h1>.SE</h1>
        </div>

        <ul className="text-xl font-light">
          Aplikace
        </ul>

        <ul>
          Pro ridice
        </ul>

        <ul>
          Kontakty
        </ul>
        
        <p>🎈🔽</p>

          <div className="bg-[#FF4A4A] text-white py-2 px-5 rounded-md text-center flex align-bottom">Objednat jízdu</div>

      </div>

    </div>
  )
}

export default Home