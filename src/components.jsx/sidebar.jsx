import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const menuItems = [
    { name: "Business News", link: "/category/business" },
    { name: "Finance News", link: "/category/finance" },
    { name: "Stock News", link: "/category/stock" },
    { name: "Crypto News", link: "/category/crypto" },
  ];

  return (
    <div className={`fixed top-0 left-0 w-full h-full bg-white z-20 pt-20 transition-all duration-300 flex justify-center items-center lg:hidden ${!isOpen ? "translate-x-full" : "translate-x-0"}`}>
      <div className="site-nav-wrap">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className="~text-2xl/5xl newsreader-700 block mb-4 hover:text-primary transition-colors duration-300"
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
