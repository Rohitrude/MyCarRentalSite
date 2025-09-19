import React, { useState } from "react";
import { assets, menuLinks } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // Determine link color based on current path
  const linkColor =
    location.pathname === "/cars" || location.pathname === "/my-bookings"
      ? "text-black"
      : "text-white";

  return (
    <div
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-borderColor relative transition-all ${
        location.pathname === "/" ? "text-white" : ""
      }`}
    >
      <Link to="/" className={`flex items-center font-bold text-2xl gap-0.5`}>
        <img
          src={assets.logo1}
          alt="logo"
          className="h-8"
          style={{
            filter:
              "brightness(0) saturate(100%) invert(62%) sepia(98%) saturate(749%) hue-rotate(72deg) brightness(97%) contrast(101%)",
          }}
        />
        <span style={{ color: "#08d708" }}>CarRental</span>
      </Link>
      <div
        className={`max-sm:fixed max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t border-borderColor right-0 flex flex-col sm:flex-row itmes-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50  ${
          location.pathname === "/cars" ? "" : ""
        } ${open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"} ${open ? "max-sm:bg-blue-950" : ""}`}
      >
        {menuLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            className={`relative px-1 py-0.5 transition-colors
              hover:underline hover:underline-offset-4
              ${location.pathname === link.path ? "underline underline-offset-4 font-medium --color-primary-dull" : ""}
              ${linkColor} max-sm:text-white 
            `}
          >
            {link.name}
          </Link>
        ))}
        <div className={`hidden lg:flex items-center text-sm gap-2 border  px-3 rounded-full max-w-56`}>
          <input
            type="text"
            id="search"
            className={`py-1.5 w-full bg-transparent outline-none ${location.pathname === "/cars" || location.pathname === "/my-bookings" ? "placeholder-black" : "placeholder-white" } `}
            placeholder="Search products"
          />
          <label htmlFor="search"><img src={assets.search_icon} alt="search" className="brightness-500" /></label>
        </div>

        <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
          <button
            onClick={() => navigate("/owner")}
            className={`cursor-pointer relative px-1 py-0.5 transition-colors hover:underline hover:underline-offset-4 max-sm:text-white ${linkColor}`}
          >
            Dashboard
          </button>
          <button
            onClick={() => setShowLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg"
          >
            Login
          </button>
        </div>
      </div>
      <button
        className="sm:hidden cursor-pointer p-2 rounded-md  bg-primary"
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <img
          src={open ? assets.close_icon : assets.menu_icon}
          alt="menu"
          style={{ filter: "invert(1)" }}
        />
      </button>
    </div>
  );
};

export default Navbar;
