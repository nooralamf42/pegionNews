import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`tpoffcanvas ${!isOpen && "hidden"}`}>
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
