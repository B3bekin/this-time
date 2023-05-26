import React from "react";
import Image from "next/image";

import TaPrava from "/public/ours.svg"
import Down from "/public/down.png"

function Header() {

    return (
        <div className="sticky top-0">
            <div className="bg-white flex justify-center items-center">

                <div className="font-extrabold text-4xl flex-col text-[#FF4A4A] leading-[0.75] pb-3">
                    <h1 className="flex justify-end ">svez</h1>
                    <h1 className="flex justify-end ">.se</h1>
                </div>

                <div>
                    <ul className="flex flex-row gap-10 tracking-wider font-[350] text-xl px-32">
                        <li>Aplikace</li>
                        <li>Pro řidiče</li>
                        <li>Kontakt</li>
                        <div className="flex flex-row gap-3">
                            <Image src={TaPrava} width={18} height={14} />
                            <Image src={Down} width={16} height={8} />
                        </div>
                    </ul>
                </div>

                <div className="bg-[#ea6565] text-white py-2 px-5 rounded-md text-center font-[350] align-bottom">
                    <p>Objednat jízdu</p>
                </div>

            </div>
        </div>


    )
}

export default Header