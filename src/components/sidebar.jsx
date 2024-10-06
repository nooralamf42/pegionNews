import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen, menuItems}) => {
  return (
    <div className={`fixed top-0 left-0 w-full md:w-1/2 h-full bg-white text-black z-20 pt-20 transition-all duration-300 flex justify-center items-center lg:hidden ${!isOpen ? "translate-x-[-100%]" : "translate-x-0"}`}>
      <div className="site-nav-wrap">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="~text-2xl/5xl newsreader-700 block text-center mb-4 hover:text-primary transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
