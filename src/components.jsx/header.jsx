import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../public/images/logo.png'
import Sidebar from "./sidebar";
import { fetchSearchNews } from "../feature/news/newsSlice";
import { useDispatch } from "react-redux";
import { titleToSlug } from "../utils/slugFormat";


const menuData = [
  { name: "Home", link: "/" },
  { name: "Business",link: "/category/business" },
  { name: "Finance", link: "/category/finance" },
  { name: "Stocks", link: "/category/stock" },
  { name: "Crypto", link: "/category/crypto" },
];


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  // Search input state
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false)
  const handleSearch = () =>{
    setIsSearchActive(!isSearchActive)
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const formHandler = (e) =>{
    e.preventDefault()
    dispatch(fetchSearchNews(searchQuery))
    setIsSearchActive(!isSearchActive)
    setSearchQuery('')
    navigate('/search/' + titleToSlug(searchQuery))
  }
  return (
    <header
      id="theme-header-one"
      className="theme-header-main header-style-one"
    >
      <div className="theme-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2">
              <div className="logo">
                <a href="/" className=" w-fit"><img src={logo} className="max-w-[20px] sm:max-w-[30px] lg:max-w-[60px] inline-block" alt="" srcset="" />.news</a>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="col-lg-6 visible">
              <div className="nav-menu-wrapper">
                <div className="mainmenu">
                  <nav className="nav-main-wrap">
                    <ul className="theme-navigation-wrap theme-main-menu">
                      {menuData.map((item, index) => (
                        <li key={index}>
                          <Link to={item.link}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            {/* Search and Other Header Options */}
            <div className="col-lg-4">
              <div className="header-right-wrapper">
                {/* Search Input */}
                <div className="header_search_wrap" onClick={handleSearch}>
                  <div className="search-icon theme-search-custom-iconn">
                    <i className="icofont-search-1"></i>
                  </div>
                  <div id="theme-serach-box_Inner" className={`${isSearchActive && "toggled"}`}>
                    <div className="theme-serach-box_inner_wrapper d-flex align-items-center">
                      <form
                        onSubmitCapture={formHandler}
                        role="search"
                        method="get"
                        className="search-form"
                        onSubmit={(e) => e.preventDefault()}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="form-group">
                          <input
                            type="text"
                            className="search-input relative"
                            id="popup-search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Type keywords here....."
                          />
                        </div>
                        <button
                          type="submit"
                          className="search-button submit-btn cursor-pointer"
                        >
                          <i className="icofont-search-1"></i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                {/* Subscribe Button */}
                {/* <div className="header-subscribe">
                  <button className="subscribe-btn">Subscribe</button>
                </div> */}

                {/* Burger Menu */}
                <div className="header-burger-menu sm:hidden">
                  <div className="burger-nav-bar">
                    <button className="tp-header__bars tp-menu-bar" onClick={()=>setIsOpen(!isOpen)}>
                      <i className="ri-menu-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
    </header>
  );
};

export default Header;
