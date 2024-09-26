import { BiSearchAlt2 } from "react-icons/bi"; 
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from '../public/images/logo.png'
import Sidebar from "./sidebar";
import { fetchSearchNews } from "../feature/news/newsSlice";
import { useDispatch } from "react-redux";
import { titleToSlug } from "../utils/slugFormat";


const menuData = [
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
    <header className="sticky z-50 top-0 bg-white border-b border-gray-200">
    <nav className="my-container news-cycle-bold py-2 lg:py-0  flex justify-between items-center ">
              <div className="flex items-center gap-2 group">
                <Link to="/" className="w-fit flex items-end"><img src={logo} className="~w-10/12 group-hover:rotate-45 transition-all duration-300" alt="" srcset="" /><span className="newsreader-700 ~text-xl/3xl">.news</span></Link>
                
              </div>

            {/* Navigation Menu */}
       
                <ul className="hidden lg:flex items-center gap-8">
                      {menuData.map((item, index) => (
                        <li key={index} className="relative group tracking-wider  overflow-hidden">
                          <Link className='relative z-50' to={item.link}>{item.name}</Link>
                          <div className="absolute inset-0 w-full bg-primary/50 transform transition-transform duration-700 group-hover:translate-x-full -translate-x-full"></div>
                        </li>
                      ))}
                </ul>
     
            {/* Search and Other Header Options */}
          
                  <div className={``}>
                      <form
                        onSubmitCapture={formHandler}
                        role="search"
                        method="get"
                        className=" flex items-center gap-2"
                        onSubmit={(e) => e.preventDefault()}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="">
                          <input
                            type="text"
                            className="relative w-24 sm:w-fit px-1 border-b focus:outline-none focus:border-green-400"
                            id="popup-search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search News"
                          />
                        </div>
                        <button
                          type="submit"
                          className="cursor-pointer"
                        >
                          <BiSearchAlt2 />
                        </button>
                      </form>
                      </div>

            
                    {/* <button className="tp-header__bars tp-menu-bar" onClick={()=>setIsOpen(!isOpen)}>
                      
                    </button> */}
        
    
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
    </nav>
    </header>
  );
};

export default Header;
