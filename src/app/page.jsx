import React from "react";
import Header from "./headerhere";

import Car from "/public/sayeera.jpg"

function Home() {

  return (
    <div className="min-h-screen">

      <Header />

      <div className="bg-[#FF4A4A] grid grid-cols-5 pt-16 pb-8">
        <div className="col-span-1 " />

        <div className="col-span-3 pl-10">
          <h1 className="text-white font-extrabold text-4xl">Spolehlivé a bezpečné </h1>
          <h1 className="text-white font-extrabold text-4xl pt-3 pb-14">TAXI po Praze a okolí</h1>

          <p className="text-white pb-2 text-xl">Objednejte si svoji jízdu:</p>

          <div className="flex flex-col gap-3">
            <div className="bg-white text-[#FF4A4A] py-3 px-5 font-extrabold text-2xl rounded-md max-w-fit">
              {/*<p>icon</p>*/}
              <p>222 111 000</p>
            </div>

            <div className="bg-white text-[#FF4A4A] py-3 px-5 font-bold text-2xl rounded-md max-w-fit">
              <p> Objednejte online</p>
            </div>

            <div className="bg-white text-[#FF4A4A] py-3 px-5 font-bold text-2xl rounded-md max-w-fit">
              <p>Stáhnout aplikaci</p>
            </div>

            <div className="flex flex-row  gap-2">
              <div className="bg-black border-solid border-2 border-yellow-500 text-white py-1 px-3 font-thin max-w-fit">Google play</div>
              <div className="bg-black border-solid border-2 border-yellow-500 text-white py-1 px-3 font-thin max-w-fit">Apple store</div>
            </div>
          </div>

        </div>

        <div className="col-span-1" />
      </div>

      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <Image src={Car} />
        </div>

        <div className="col-span-3 pl-10">
          <div className="pt-20 pb-7 text-4xl font-semibold tracking-wider">
            Jezděte po Praze se Svez.se
          </div>

          <p className=" leading-10">
            Nízké ceny nebo luxusní jízda. Vyber si podle svých představ.<br />
            Klademe důraz především na kvalitu služby a tvou bezpečnost.<br />
            Vždy se máš na koho obrátit. Všechny jízdy jsou pod neustálým dozorem dispečinku, který je připraven Ti pomoci.<br />
            Jízdné můžeš zaplatit hotově nebo kartou. Všechny vozy mají platební terminál.
          </p>
        </div>

        <div className="col-span-1" />
      </div>
    </div>
  )
}

export default Home