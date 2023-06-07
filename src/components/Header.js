import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-16 bg-slate-900 text-white flex flex-wrap items-center justify-between px-20">
      <Link to="/">
        <h1 className="font-semibold text-2xl cursor-pointer">
          Movie <span className="text-yellow-600 ">App</span>
        </h1>
      </Link>
      <ul className="flex gap-8 items-center justify-center">
        <Link to="/">
          <li className="cursor-pointer">Home</li>
        </Link>

        <Link to="/about">
          <li className="cursor-pointer">About</li>
        </Link>
        <Link to="/contact">
          <li className="cursor-pointer">Contact</li>
        </Link>
        <Link to="/signin">
          <button
            type="button"
            className="flex items-center justify-center rounded-md bg-yellow-600 px-4 py-2 text-sm font-semibold text-white shadow-sm  hover:bg-yellow-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
          >
            Sign In
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
