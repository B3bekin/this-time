import React from "react";
import Header from "./headerhere";
import Image from "next/image";
import Footer from "./footer";

import Car from "/public/sayeera.jpg"
import Cars from "/public/sayeeras.jpg"
import Phone from "/public/call.png"

import Dia from "/public/diamant.png"
import Money from "/public/monies.png"
import Plane from "/public/letadlo.png"

function Home() {

  return (
    <div className="min-h-screen">

      <Header />

      <div className="bg-[#FF4A4A] grid grid-cols-5 pt-16 pb-8">
        <div className="col-span-1 " />

        <div className="col-span-2 pl-10">
          <h1 className="text-white font-extrabold text-4xl">Spolehlivé a bezpečné </h1>
          <h1 className="text-white font-extrabold text-4xl pt-3 pb-14">TAXI po Praze a okolí</h1>

          <p className="text-white pb-2 text-xl">Objednejte si svoji jízdu:</p>

          <div className="flex flex-col gap-3">
            <div className="bg-white text-[#FF4A4A] tracking-wide py-3 px-5 font-extrabold text-2xl rounded-md max-w-fit">
              {/*<p>icon</p>*/}
              <div className="flex justify-between gap-5">
                <Image src={Phone} width={30} height={25} alt="phone-call" />
                <p> 222 111 000</p>
              </div>


            </div>

            <div className="bg-white text-[#FF4A4A] tracking-wide py-3 px-5 font-bold text-2xl rounded-md max-w-fit">
              <p> Objednejte online</p>
            </div>

            <div className="bg-white text-[#FF4A4A] tracking-wide py-3 px-5 font-bold text-2xl rounded-md max-w-fit">
              <p>Stáhnout aplikaci</p>
            </div>

            <div className="flex flex-row  gap-2">
              <div className="bg-black border-solid border-2 rounded-md border-yellow-500 text-white py-1 px-3 font-thin max-w-fit">Google play</div>
              <div className="bg-black border-solid border-2 rounded-md border-yellow-500 text-white py-1 px-3 font-thin max-w-fit">Apple store</div>
            </div>
          </div>


        </div>

        <div className="col-span-3">
          <Image src={Car} width={1024} height={525} className="z-[2] px-auto" />
        </div>

      </div>

      <div className="grid grid-cols-5">
        <div className="col-span-1">

        </div>

        <div className="col-span-3 pl-10">
          <div className="pt-20 pb-7 text-4xl font-semibold tracking-wider">
            Jezděte po Praze se Svez.se
          </div>

          <p className="text-gray-600 leading-10">
            Nízké ceny nebo luxusní jízda. Vyber si podle svých představ.<br />
            Klademe důraz především na kvalitu služby a tvou bezpečnost.<br />
            Vždy se máš na koho obrátit. Všechny jízdy jsou pod neustálým dozorem dispečinku, který je připraven Ti pomoci.<br />
            Jízdné můžeš zaplatit hotově nebo kartou. Všechny vozy mají platební terminál.
          </p>

          <Image className="flex mx-auto" src={Cars} alt="auta" />

          <div className="flex justify-between pb-20">
            <div>
              <Image src={Money} />
              <h1 className="font-bold pt-3 pb-4">Economy</h1>
              <p className="text-gray-600 pb-7">Rychlé přistavení díky skvělé dostupnosti vozů za výhodnou cenu.</p>
              <div className="text-white bg-[#FF4A4A] mx-5 my-3">Objednat Economy</div>
            </div>
            <div>
              <Image src={Dia} />
              <h1 className="font-bold pt-3 pb-4">Business</h1>
              <p className="text-gray-600 pb-7">Komfortní vozy a profesionální řidiči. Důraz na kvalitu služby, pečlivý výběr řidičů a pravidelné kontroly vozů zajišťují ten nejlepší servis pro zákazníka.</p>
              <div className="text-white bg-[#FF4A4A] mx-5 my-3">Objednat Business</div>
            </div>
            <div>
              <Image src={Dia} />
              <h1 className="font-bold pt-3 pb-4">Economy</h1>
              <p className="text-gray-600 pb-7">Pro jízdy z letiště a na letiště využij nejjednodušší způsob přepravy. Jsme officiální taxislužbou na Letišti Václava Havla, kde jsou naše vozy k dispozici přímo před terminály. </p>
            </div>
          </div>


        </div>

        <div className="col-span-1" />
      </div>
    </div>
  )
}

export default Home