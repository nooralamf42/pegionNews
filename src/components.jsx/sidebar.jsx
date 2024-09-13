import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({isOpen, setIsOpen}) => {
  return (
    <div className="tp-offcanvas-area">
      <div className={`tpoffcanvas ${isOpen && 'opened'}`}>
        <div className="tpoffcanvas__close-btn" onClick={()=>setIsOpen(!isOpen)}>
          <button className="close-btn relative z-50"><i className="icofont-close"></i></button>
        </div>
        <div className="tpoffcanvas__text offcanvas-content">
          <div className="mobile-canvas-content">
            <div className="canvas-nav-menu-wrapper grid justify-center items-center">
            <div className="site-nav-wrap">
                    <h2><Link to="/category/business">Business News</Link></h2>
                    <h2><Link to="/category/finance">Finance News</Link></h2>
                    <h2><Link to="/category/stock">Stock News</Link></h2>
                    <h2><Link to="/category/crypto">Crypto News</Link></h2>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
