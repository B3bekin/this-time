import React from "react";
import Image from "next/image";

import Fcbk from "/public/facebook.png"
import Inst from "/public/instagram.png"
import Lnkd from "/public/linkedin.png"
import Twtr from "/public/twitter.png"

function Footer() {

    return (
        <div>
            <div className="grid bg-gray-100 grid-cols-5 pb-10">
                <div className="col-span-1" />

                <div className="col-span-1 pt-7">
                    <h2 className="pb-4 text-2xl">Svez.se</h2>
                    <ul className="pl-4  text-gray-600 flex flex-col">
                        <li>O nás</li>
                        <li>Kontakt</li>
                        <li>Časté dotazy</li>
                        <li>Cena jízdy</li>
                        <li>Pro média</li>
                        <li>Pro řidiče</li>
                        <li>Kariéra</li>
                        <li>Všeobecné obchodní podmínky</li>
                        <li>Ochrana osobnívh údajů</li>
                    </ul>
                </div>

                <div className="col-span-1 pt-7">
                    <h2 className="pb-4 text-2xl">Svez.se pro firmy</h2>
                    <ul className="pl-4 text-gray-600 flex flex-col">
                        <li>Pro firmy</li>
                        <li>Rozvoz zásilek</li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <div className="pt-10 pb-4">
                        <div className="font-extrabold text-7xl flex flex-col justify-end text-[#FF4A4A]">
                            <div className="">svez</div>
                            <div className="">.se</div>
                        </div>
                    </div>

                    <div className="flex flex-row gap-4 pb-5 ">
                        <div className="bg-white p-2 rounded-full p-15">
                            <Image src={Fcbk} width={35} height={35} />
                        </div>

                        <div className="bg-white p-2 rounded-full">
                            <Image src={Inst} width={35} height={35} />
                        </div>

                        <div className="bg-white p-2 rounded-full">
                            <Image src={Lnkd} width={35} height={35} />
                        </div>

                        <div className="bg-white p-2 rounded-full">
                            <Image src={Twtr} width={35} height={35} />
                        </div>
                    </div>

                    <div className="text-[#FF4A4A] font-normal pl-5 text-2xl">#SVEZSE</div>
                </div>

                <div className="col-span-1" />
            </div>
            <div className="bg-black text-white font-thin text-center">
                <h3 className="text-sm pt-2">TICK TACK s.r.o. 2023 © All Rights Reserved.</h3>
                <h4 className="text-xs pb-2"> Tento web používá k poskytování služeb, personalizaci reklam a analýze návštěvnosti soubory cookie. Používáním tohoto webu s tím souhlasíte.</h4>
            </div>
        </div>
    )
}

export default Footer