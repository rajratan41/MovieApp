import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-14 px-20 bg-slate-900 text-white flex items-center justify-between">
      <Link to="/">
        <h1 className="font-semibold text-2xl cursor-pointer">
          Movie <span className="text-yellow-300">App</span>
        </h1>
      </Link>
      <ul className="flex gap-8">
        <Link to="privacy">
          <li className="cursor-pointer">Privacy Policy</li>
        </Link>
        <Link to="terms">
          <li className="cursor-pointer">Terms of Services</li>
        </Link>
        <Link to="about">
          <li className="cursor-pointer">About Us</li>
        </Link>
        <Link to="contact">
          <li className="cursor-pointer">Contact Us</li>
        </Link>
      </ul>
    </div>
  );
};

export default Footer;
