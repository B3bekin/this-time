import React from "react";

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
                <ul>
                  <li>Peaches</li>
                  <li>Peaches</li>
                  <li>Peaches</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-300 flex justify-center py-40">
              <div className="bg-orange-200 max-w-fit">
                <li>
                  <ul>Peaches</ul>
                  <ul>Peaches</ul>
                  <ul>Peaches</ul>
                </li>
              </div>
            </div>

            <div className="bg-yellow-200 flex justify-center py-40">
              <div className="bg-yellow-100 max-w-fit p-10 ">
                <h3 className="">No grid today</h3>
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