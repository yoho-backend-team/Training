import React from "react";
import { BsCup } from "react-icons/bs";
import { IoGameControllerOutline } from "react-icons/io5";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { FaSchool } from "react-icons/fa6";
import { IoMdCash } from "react-icons/io";

const Tickets = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center mt-5 mb-5">
          <h1 className="font-bold text-2xl">
            Get Your <span className="text-blue-400 underline">Tickets</span>
          </h1>
        </div>
        <div className="flex justify-center mb-10">
          <div className="grid grid-cols-3 justify-center gap-4 ">
            <div className=" rounded-md w-70 h-75 shadow-xl shadow-gray-600">
              <div className="h-8 bg-blue-950 flex justify-between text-white px-5 rounded-t-md">
                <h1>Early Bird</h1>
                <p>$640</p>
              </div>
              <div className="flex pl-3 gap-2 py-2">
                <BsCup className="w-5 h-5 mt-1" />
                <p>All-Day Coffee + Snacks</p>
              </div>
              <div className="flex pl-3 gap-2 py-2">
                <IoGameControllerOutline className="w-5 h-5 mt-1" />
                <p>After Party</p>
              </div>
              <div className="flex pl-3 gap-2 py-2">
                <HiMiniComputerDesktop className="w-5 h-5 mt-1" />
                <p>24/7 Support</p>
              </div>
              <hr className="w-40 ml-8 mt-3 mb-4 bg-gray-400" />
              <p className="pl-3">Quick group meetings for multiple teams</p>
              <button className="border rounded-2xl p-1 mt-5 ml-3 px-2 text-white bg-blue-900">
                Buy Tickets
              </button>
            </div>

            <div className=" rounded-md w-70 h-75 shadow-xl shadow-gray-600">
              <div className="h-8 bg-blue-950 flex justify-between text-white px-5 rounded-t-md">
                <h1>Gold</h1>
                <p>$840</p>
              </div>
              <div className="flex pl-3 gap-2 py-2">
                <BsCup className="w-5 h-5 mt-1" />
                <p>All-Day Coffee + Snacks</p>
              </div>
              <div className="flex pl-3 gap-2 py-2">
                <FaSchool className="w-5 h-5 mt-1" />
                <p>Group Meetings + After Party</p>
              </div>
              <div className="flex pl-3 gap-2 py-2">
                <HiMiniComputerDesktop className="w-5 h-5 mt-1" />
                <p>24/7 Support + Instant Chats</p>
              </div>
              <hr className="w-40 ml-8 mt-3 mb-4 bg-gray-400" />
              <p className="pl-3">Quick group meetings for multiple teams</p>
              <button className="border rounded-2xl p-1 mt-5 ml-3 px-2 text-white bg-blue-900">
                Buy Tickets
              </button>
            </div>

            <div className=" rounded-md w-70 h-75 shadow-xl shadow-gray-600">
              <div className="h-8 bg-blue-950 flex justify-between text-white px-5 rounded-t-md">
                <h1>Platinum</h1>
                <p>$1,240</p>
              </div>
              <div className="flex pl-3 gap-2 py-2">
                <IoMdCash className="w-5 h-5 mt-1" />
                <p>Cashback $200</p>
              </div>
              <div className="flex pl-3 gap-2 py-2">
                <FaSchool className="w-5 h-5 mt-1" />
                <p>Private Meetings + After Party</p>
              </div>
              <div className="flex pl-3 gap-2 py-2">
                <HiMiniComputerDesktop className="w-5 h-5 mt-1" />
                <p>24/7 Support + Instance Chats</p>
              </div>
              <hr className="w-40 ml-8 mt-3 mb-4 bg-gray-400" />
              <p className="pl-3">Quick group meetings for multiple teams</p>
              <button className="border rounded-2xl p-1 mt-5 ml-3 px-2 text-white bg-blue-900">
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
