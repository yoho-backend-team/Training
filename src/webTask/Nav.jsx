import React from "react";
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div >
      <div className="flex justify-between bg-violet-950 text-white p-4">
        <div className=" text-blue-300 ml-30">
          <h1>LEADERSHIP<br/>EVENT</h1>
          
        </div>
        <div className="flex justify-between gap-8 mr-10 items-center **:hover:bg-blue-400 **:hover:rounded-md  **:p-1">
          <Link to = {"/"}>Home</Link>
          <Link to = {"about"}>About</Link>
          <Link to = {"speaker"}>Speakers</Link>
          <Link to = {"shedules"}>Shedules</Link>
          <Link to = {"pricing"}>Pricing</Link>
          <Link to = {"venue"}>Venue</Link>
          <Link to = {"contact"}>Contact</Link>
          <Link to = {"tickets"}>Buy Tickets</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
