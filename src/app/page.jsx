import React from "react";
import Header from "./headerhere";

function Home() {

  return (
    <div className="bg-violet-300 min-h-screen">

      <Header />

      <div className="bg-[#FF4A4A] grid grid-cols-5 pt-16">

        <div className="bg-yellow-400 col-span-1 "/>

        <div className="col-span-3 pl-10">
          <h1 className="text-white font-extrabold text-4xl">Spolehlivé a bezpečné </h1>
          <h1 className="text-white font-extrabold text-4xl pt-3">TAXI po Praze a okolí</h1>

          <p>Objednejte si svoji jízdu:</p>

          <div className="flex flex-col gap-3">
            <div className="bg-white text-[#FF4A4A] py-3 px-5 font-extrabold max-w-fit">
              {/*<p>icon</p>*/}
              <p>222 111 000</p>
            </div>

            <div className="bg-white text-[#FF4A4A] py-3 px-5 font-extrabold max-w-fit">
              <p> Objednejte online</p>
            </div>

            <div className="bg-white text-[#FF4A4A] py-3 px-5 font-extrabold max-w-fit">
              <p>Stáhnout aplikaci</p>
            </div>

            <div className="flex flex-row gap-2">
              <div className="bg-black text-white py-1 px-3 font-bold max-w-fit">Google play</div>
              <div className="bg-black text-white py-1 px-3 font-bold max-w-fit">Apple store</div>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-yellow-400" />





      </div>


    </div>
  )
}

export default Home