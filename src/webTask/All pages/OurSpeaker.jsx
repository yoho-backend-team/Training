import React from "react";

const OurSpeaker = () => {
  return (
    <div>
      <div className="bg-blue-200 h-135">
        <div className="flex justify-between pt-20">
          <div className="ml-80 w-100 mt-15">
            <h1 className="text-2xl font-bold py-2">
              Our<span className="text-blue-800 underline"> Speakers</span>
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
              tenetur ea. Nobis qui iure exercitationem nostrum ipsam placeat
              quo itaque modi, neque reiciendis optio, dicta blanditiis quis,
              aliquam sapiente alias.
            </p>
          </div>
          <div className="mr-70 ml-10 relative">
            <img
              src="https://tse4.mm.bing.net/th/id/OIP.tZ98LGTSsnsCvhdGp6Ll3wHaE8?pid=Api&P=0&h=220"
              className="w-75 h-60"
            />
            <div className="absolute inset-0 mt-40 w-63 h-15 bg-white ml-3  flex">
              <div className="bg-blue-500 w-2"></div>
              <div className="p-2">
                <p className="font-bold ">Logan Wilson</p>
                <p>CEO/Founcer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-5 py-10 px-65">
          <div className="relative">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.DI04UesKRYWWAf7ZeKRZ9wHaFC?pid=Api&P=0&h=220"
              className="h-40 w-65"
            />
            <div className="absolute inset-0 mt-19 w-52 h-15 bg-white ml-3  flex">
              <div className="bg-blue-500 w-2"></div>
              <div className="p-2">
                <p className="font-bold ">Natalie</p>
                <p>EVENT PLANNER</p>
              </div>
            </div>
          </div>
          <div className="relative">
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.Xki4ARJyN64qmdWvjMCJ5AHaE7?pid=Api&P=0&h=220"
            className="h-40 w-65"
          />
          <div className="absolute inset-0 mt-19 w-52 h-15 bg-white ml-3  flex">
              <div className="bg-blue-500 w-2"></div>
              <div className="p-2">
                <p className="font-bold ">Thomas</p>
                <p>COACH</p>
              </div>
            </div>
          </div>
          <div className="relative">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.JNhDJD4qlBJyRcyuWZRgkQHaE8?pid=Api&P=0&h=220"
            className="h-40 w-65"
          />
          <div className="absolute inset-0 mt-19 w-52 h-15 bg-white ml-3  flex">
              <div className="bg-blue-500 w-2"></div>
              <div className="p-2">
                <p className="font-bold ">Isabella</p>
                <p>EVENT MANAGER</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://tse3.mm.bing.net/th/id/OIP.DI04UesKRYWWAf7ZeKRZ9wHaFC?pid=Api&P=0&h=220"
              className="h-40 w-65"
            />
            <div className="absolute inset-0 mt-19 w-52 h-15 bg-white ml-3  flex">
              <div className="bg-blue-500 w-2"></div>
              <div className="p-2">
                <p className="font-bold ">Logan Wilson</p>
                <p>CEO/Founcer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurSpeaker;
