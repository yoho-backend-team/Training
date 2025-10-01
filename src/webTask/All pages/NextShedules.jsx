import React from "react";
import { BiAlarm } from "react-icons/bi";
const NextShedules = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-2xl flex justify-center mt-5">
          Next<span className="text-blue-400 underline pl-2">Schedules</span>
        </h1>
      </div>
      <div className="grid grid-cols-4 mt-5 ml-10 gap-20 px-60">
        <div className="border w-50 h-15 p-3">
          {/* style={{background:"blue"}} */}
          <h1 className="font-bold" style={{ hover: { color: "red" } }}>
            Day One
          </h1>
          <p>July 12, 2022</p>
        </div>
        <div className="border w-50 h-15 p-3">
          <h1 className="font-bold">Day Two</h1>
          <p>July 12, 2022</p>
        </div>
        <div className="border w-50 h-15 p-3">
          <h1 className="font-bold hover:text-amber-300 ">Day Three</h1>
          <p>July 12, 2022</p>
        </div>
        <div className="border w-50 h-15 p-3">
          <h1 className="font-bold">Day Four</h1>
          <p>July 12, 2022</p>
        </div>
      </div>
      <div className="flex justify-between px-50">
        <div className="ml-10 mt-10">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.aJezHTXozWttqeF6VrresAHaDt?pid=Api&P=0&h=220"
            className="w-130 h-50 rounded-md"
          />
        </div>
        <div className="mt-10 ml-10 mr-30">
          <h1 className="font-bold">Building a famous company</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            architecto cupiditate illo fuga molestiae ipsum, corporis beatae,
            doloribus culpa reprehenderit accusantium? Distinctio hic amet
            deleniti inventore facilis. Exercitationem, a velit.
          </p>
          <div className="grid grid-cols-3 mt-5">
            <div className="flex gap-5">
              <div>
                <img
                  src="https://tse2.mm.bing.net/th/id/OIP.RDvevESi-dMzMeM9GueWUQHaE7?pid=Api&P=0&h=220"
                  className="rounded-full w-12 h-12"
                />
              </div>
              <div>
                <h1 className="font-bold">Isbella</h1>
                <p>Event Manager</p>
              </div>
            </div>
            <div className="flex">
              <BiAlarm className="w-5 h-5 mt-1 mr-2" />

              <p>9.00 - 9.45 AM</p>
            </div>
            <div className="flex">
              <img
                src="https://cdn-icons-png.flaticon.com/128/591/591576.png"
                className="w-4 h-4 mt-1 mr-2"
              />
              <p>Conference Hall</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-50">
        <div className="ml-10 mt-10">
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.aJezHTXozWttqeF6VrresAHaDt?pid=Api&P=0&h=220"
            className="w-130 h-50 rounded-md"
          />
        </div>
        <div className="mt-10 ml-10 mr-30">
          <h1 className="font-bold">Building a famous company</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
            architecto cupiditate illo fuga molestiae ipsum, corporis beatae,
            doloribus culpa reprehenderit accusantium? Distinctio hic amet
            deleniti inventore facilis. Exercitationem, a velit.
          </p>
          <div className="grid grid-cols-3 mt-5">
            <div className="flex gap-5">
              <div>
                <img
                  src="https://tse2.mm.bing.net/th/id/OIP.RDvevESi-dMzMeM9GueWUQHaE7?pid=Api&P=0&h=220"
                  className="rounded-full w-12 h-12"
                />
              </div>
              <div>
                <h1 className="font-bold">Samantha</h1>
                <p>TOP LIMITED</p>
              </div>
            </div>
            <div className="flex">
              <BiAlarm className="w-5 h-5 mt-1 mr-2" />
              <p>10.00 - 10.45 AM</p>
            </div>
            <div className="flex">
              <img
                src="https://cdn-icons-png.flaticon.com/128/591/591576.png"
                className="w-4 h-4 mt-1 mr-2"
              />
              <p>100-A Room</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextShedules;
