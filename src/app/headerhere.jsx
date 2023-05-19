import React from "react";

function Header() {

    return (
        <div className="bg-white flex justify-evenly items-center">

            <div className="font-extrabold text-4xl flex justify-end flex-col text-[#FF4A4A]">
                <h1 className="">SVEZ</h1>
                <h1 className="max-w-fit">.SE</h1>
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

    )
}

export default Header