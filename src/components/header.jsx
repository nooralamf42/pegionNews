import { BiSearchAlt2 } from "react-icons/bi";
import React, { useEffect, useRef, useState } from "react";
import {Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../public/images/blue-logo.png";
import Sidebar from "./sidebar";
import { fetchSearchNews } from "../feature/news/newsSlice";
import dot from "../public/images/scroll.jpg";
import { useDispatch } from "react-redux";
import { titleToSlug } from "../utils/slugFormat";
import axios from "axios";
import Loading from "./loading";
import useDateTime from "../hooks/useDateTime";

const menuData = [
  { name: "Home", link: "/" },
  { name: "Business", link: "/category/business" },
  { name: "Finance", link: "/category/finance" },
  { name: "Stocks", link: "/category/stock" },
  { name: "Crypto", link: "/category/crypto" },
  { name: "Politics", link: "/category/politics" },
  { name: "Tech", link: "/category/tech" },
  { name: "Wealth", link: "/category/wealth" },
  { name: "World", link: "/category/world" },
  { name: "Mutual Fund", link: "/category/mutual_fund" },
  { name: "Sports", link: "/category/sports" },
];;


const Header = () => {
  const dateTime = useDateTime();
  const pathName = useLocation().pathname
  useEffect(()=>{
    window.scrollTo(0,0)
  }, [pathName])
  const navigate = useNavigate()

 
  return (
    <header className="overflow-hidden bg-white border-gray-200 py-2 flex flex-col justify-center items-center">
      <div onClick={()=>navigate('/')} className="w-fit mx-auto flex items-end justify-center cursor-pointer group">
        <div className="flex items-end animate_pegion_body relative">
        <img
          src={logo}
          className="~w-10/16"
          alt=""
          srcSet=""
        />
        <div className="~w-5/8 mb-1 -ml-2">
        <img src={dot} className="~w-5/8 animate_news_scroll top-2 right-3" alt="" srcset="" />
        </div>
        </div>
        <span className="pirata-one-regular uppercase text-primary ~text-3xl/5xl">
          pigeon news
        </span>
      </div>
      <div className="text-center mt-2">
        <h1 className="ml-3 news-cycle-regular text-sm font-thin text-neutral-600 uppercase">{dateTime}</h1>
      </div>
    </header>
  );
};

export default Header;

export const Navbar = () =>{
  const [isOpen, setIsOpen] = useState(false);
  // Search input state
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const handleSearch = () => {
    setIsSearchActive(!isSearchActive);
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formHandler = (e) => {
    e.preventDefault();
    setIsSearchActive(true);
    dispatch(fetchSearchNews(searchQuery))
      .unwrap()
      .then(() => {
        setIsSearchActive(false);
        setSearchQuery("");
        navigate("/search/" + titleToSlug(searchQuery));
      })
      .catch((error) => {
        console.error("Failed to fetch search news:", error);
      });
  };
  if(isSearchActive) return <Loading/>
  return (
    <nav className="bg-secondry shadow-lg sticky top-0 z-50 text-white p-2 my-container mt-4 news-cycle-bold flex justify-between items-center px-4">
        <div className="items-center gap-2 lg:hidden flex">
          <button className="relative group z-50" onClick={() => setIsOpen(!isOpen)}>
            <div className="relative flex items-center justify-center w-[30px] h-[30px] transform transition-all duration-200">
              <div
                className={`flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 ${
                  isOpen && "rotate-[45deg]"
                } origin-center`}
              >
                <div
                  className={`${isOpen ? "bg-black": "bg-white"} h-[2px] w-1/2 rounded transform transition-all duration-300  origin-right delay-75 ${
                    isOpen && "-rotate-90 h-[1px] -translate-y-[1px]"
                  }`}
                ></div>
                <div className={`${isOpen ? "bg-black": "bg-white"} h-[1px] rounded`}></div>
                <div
                  className={`${isOpen ? "bg-black": "bg-white"} h-[2px] w-1/2 rounded self-end transform transition-all duration-300 origin-left delay-75 ${
                    isOpen && "-rotate-90 h-[1px] translate-y-[1px]"
                  }`}
                ></div>
              </div>
            </div>
          </button>
            <Link to={"/"} className="font-thin">Home</Link>
        </div>

        {/* Navigation Menu */}

        <ul className="hidden lg:flex items-center gap-8 font-thin">
          {menuData.map((item, index) => (
            <li
              key={index}
              className="relative group overflow-hidden"
            >
              <Link className="relative z-50" to={item.link}>
                {item.name}
              </Link>
              <div className="absolute inset-0 w-full bg-primary transform transition-transform duration-700 group-hover:translate-x-full -translate-x-full"></div>
            </li>
          ))}
        </ul>

        {/* Search and Other Header Options */}

        <div className={``}>
          <form
            onSubmit={formHandler}
            role="search"
            method="get"
            className=" flex items-center gap-2"
          >
            <div className="">
              <input
                type="text"
                required
                className="relative w-24 sm:w-fit px-1 border-b focus:outline-none focus:border-secondry text-black font-semibold"
                id="popup-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search News"
              />
            </div>
            <button type="submit" className="cursor-pointer">
              <BiSearchAlt2 />
            </button>
          </form>
        </div>

        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} menuItems={menuData}/>
      </nav>
  )
}