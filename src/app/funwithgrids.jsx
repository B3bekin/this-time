import React from "react";
import Image from "next/image";

import Orange from "/public/ai-dos.png"
import Pink from "/public/ai-tres.png"

function Home() {
  return (
    <div className="bg-gray-600 min-h-screen">
      <div className="pt-10">
        <div className="flex justify-center mb-10">
          <h1 className="bg-gradient-to-br from-red-700 via-orange-600 to-yellow-500 text-xl text-white font-semibold px-5 py-8 rounded-3xl">Lorem ipsum dolor sit amet consectetur adipisicing eclips!</h1>
        </div>
      </div>

      <div>
        <div className="text-center">
          <div className="grid grid-cols-5 ">
            <div className="flex flex-grow" />

            <div className="bg-red-400 flex justify-center py-40 ">
              <div className="bg-red-300 max-w-fit">
                <div className="m-8">
                  <Image src={Pink} />
                </div>
              </div>
            </div>

            <div className="bg-orange-300 flex justify-center py-40">
              <div className="bg-orange-200 max-w-fit">
                <div className="m-8">
                  <Image src={Orange} />
                </div>
              </div>
            </div>

            <div className="bg-yellow-200 flex justify-center py-40">
              <div className="bg-yellow-100 max-w-fit p-10 min-w-full flex items-center">
                <div className="mx-auto">
                  <h1 className="text-3xl font-bold ">Oops!</h1>
                  <h3 className="text-xl font-medium py-1">No grid today, sorry 👃</h3>
                </div>

              </div>
            </div>

            <div className="flex flex-grow" />

          </div>
        </div>
      </div>

    </div>
  )
}

export default Home