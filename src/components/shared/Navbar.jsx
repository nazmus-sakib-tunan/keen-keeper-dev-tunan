import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';
import { MdOutlineQueryStats } from 'react-icons/md';
import { Link } from 'react-router';

const Navbar = () => {

  const [active, setActive] = useState("Home");

  const handleToggle = (name) => {
    setActive(name);
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm w-11/12 ">
        
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl">
            <p className='font-bold'>
              Keen<span className='font-semibold text-[#244D3F]'>Keeper</span>
            </p>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex"></div>

        <div className="navbar-end gap-2">
          
          <Link to={"/"}  onClick={() => handleToggle("Home")}
            className={`btn ${
              active === "Home"
                ? "bg-[#244D3F] text-white"
                : ""
            }`} >
          <FaHome className=' text-xl '/>
            Home
          
          </Link>

          <Link to={"/timeline"} onClick={() => handleToggle("Timeline")}
            className={`btn ${
              active === "Timeline"
                ? "bg-[#244D3F] text-white"
                : ""
            }`} >
            <IoMdTime className='text-2xl'/>
            Timeline
          
          
          </Link>

          <Link to={"/stats"} onClick={() => handleToggle("Stats")}
            className={`btn ${
              active === "Stats"
                ? "bg-[#244D3F] text-white"
                : ""
            }`}>
          <MdOutlineQueryStats className='text-2xl' />
            Stats
         
          
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;