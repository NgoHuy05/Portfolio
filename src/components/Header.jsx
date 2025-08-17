import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const [isOpenMenuHeader, setIsOpenMenuHeader] = useState(false);

  const handleOpenMenuHeader = () => {
    setIsOpenMenuHeader(!isOpenMenuHeader);
  };
  const handleCloseMenuHeader = () => {
    setIsOpenMenuHeader(false);
  };

  return (
    <>
      <div className="sticky top-0 z-50 w-full flex justify-between font-bold bg-white text-gray-900 shadow p-4 ">
        <Link
          to="/"
          className="flex justify-center items-center gap-3 cursor-pointer"
        >
          <div className="text-amber-500 text-[20px] rounded p-4 font-serif boder border-2">
            H
          </div>
          <div className="flex flex-col justify-center gap-1">
            <div className="text-xl mb-2 italic">HuyPhaseFirst</div>
            <div>Travel PortFolio</div>
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-10 ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex gap-2 items-center p-5 hover:bg-gray-200 rounded transition duration-300 cursor-pointer ${
                isActive ? "underline underline-offset-[10px] decoration-2" : ""
              }`
            }
          >
            <FaHome />
            Home
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `flex gap-2 items-center p-5 hover:bg-gray-200 rounded transition duration-300 cursor-pointer ${
                isActive ? "underline underline-offset-[10px] decoration-2" : ""
              }`
            }
          >
            <FaUser />
            About
          </NavLink>
          <NavLink
            to="project"
            className={({ isActive }) =>
              `flex gap-2 items-center p-5 hover:bg-gray-200 rounded transition duration-300 cursor-pointer ${
                isActive ? "underline underline-offset-[10px] decoration-2" : ""
              }`
            }
          >
            <FaProjectDiagram />
            Project
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `flex gap-2 items-center p-5 hover:bg-gray-200 rounded transition duration-300 cursor-pointer ${
                isActive ? "underline underline-offset-[10px] decoration-2" : ""
              }`
            }
          >
            <FaEnvelope />
            Contact
          </NavLink>
        </div>
        <div className="hidden lg:flex gap-2 items-center">
          Welcome
          <FaHeart />
        </div>
        <div
          onClick={handleOpenMenuHeader}
          className="flex items-center p-2 hover:bg-gray-200 rounded transition duration-300 cursor-pointer text-[25px] lg:hidden "
        >
          <IoMdMenu />
        </div>
      </div>
      {isOpenMenuHeader && (
        <div className="sticky top-[95px] w-full bg-white shadow-md z-40 lg:hidden">
          <nav className="flex flex-col text-gray-900 font-semibold">
            <NavLink
              to="/"
              onClick={handleCloseMenuHeader}
              className="p-4 hover:bg-gray-100 flex items-center gap-2"
            >
              <FaHome /> Home
            </NavLink>
            <NavLink
              to="about"
              onClick={handleCloseMenuHeader}
              className="p-4 hover:bg-gray-100 flex items-center gap-2"
            >
              <FaUser /> About
            </NavLink>
            <NavLink
              to="project"
              onClick={handleCloseMenuHeader}
              className="p-4 hover:bg-gray-100 flex items-center gap-2"
            >
              <FaProjectDiagram /> Project
            </NavLink>
            <NavLink
              to="contact"
              onClick={handleCloseMenuHeader}
              className="p-4 hover:bg-gray-100 flex items-center gap-2 "
            >
              <FaEnvelope /> Contact
            </NavLink>
            <div className="flex justify-center items-center border-b-2 border-gray-600 w-[98%] m-auto"></div>
            <div className="p-4 flex items-center gap-2 ">
              Welcome
              <FaHeart />
            </div>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
