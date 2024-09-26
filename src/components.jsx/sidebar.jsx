import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-white z-20 pt-20 transition-all duration-300 flex justify-center items-center lg:hidden ${!isOpen ? "translate-x-full" : "translate-x-0"}`}>
      <div className="site-nav-wrap">
        <h2>
          <Link to="/category/business">Business News</Link>
        </h2>
        <h2>
          <Link to="/category/finance">Finance News</Link>
        </h2>
        <h2>
          <Link to="/category/stock">Stock News</Link>
        </h2>
        <h2>
          <Link to="/category/crypto">Crypto News</Link>
        </h2>
      </div>
    </div>
  );
};

export default Sidebar;
