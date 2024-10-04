import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../public/images/image.jpg";
import dot from "../public/images/dot3.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      setWarningMessage("Please enter your email address.");
      setTimeout(() => {
        setShowWarning(false);
      }, 3000);
      setShowWarning(true);
    } else if (!isChecked) {
      setWarningMessage("Please accept the Terms & Policy.");
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 3000);
    } else {
      console.log("Subscribed:", email);
      setEmail("");
      setIsChecked(false);
      setWarningMessage("Successfully subscribed!");
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 3000);
    }
  };

  const newsPaperRef = useRef(null);
  let newsPaperTimeout;
  const handleNewsPaper = () => {
    clearTimeout(newsPaperTimeout);
    newsPaperRef.current.classList.add("absolute");
    newsPaperTimeout = setTimeout(() => {
      newsPaperRef.current.classList.remove("absolute");
    }, 750);
  };
  const navigate = useNavigate();

  return (
    <footer className="bg-secondry text-white py-10">
      <div className="my-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div
              onClick={() => navigate("/")}
              className="w-fit mx-auto flex gap-4 flex-col items-center justify-center cursor-pointer group"
              onMouseEnter={handleNewsPaper}
            >
              <div className="flex items-end group-hover:rotate-45 relative mix-blend-screen">
                <img
                  src={logo}
                  className="~w-20/24 mix-blend-screen"
                  alt=""
                  srcSet=""
                />
                <div className="~w-8/12 mb-1 -ml-2">
                  <img
                    ref={newsPaperRef}
                    src={dot}
                    className="~w-8/12 group-hover:-rotate-[60deg] top-2 right-3"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <span className="pirata-one-regular whitespace-nowrap uppercase text-white ~text-4xl/6xl">
                pegion news
              </span>
            </div>
            <p className="newsreader-500">
              Stay updated with the latest news in finance, business, stocks,
              and crypto. Pegions.news provides you with the most relevant and
              timely information to help you make informed decisions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className=" hover:text-primary">
                <i className="icofont-facebook"></i>
              </a>
              <a href="#" className=" hover:text-primary">
                <i className="icofont-twitter"></i>
              </a>
              <a href="#" className=" hover:text-primary">
                <i className="icofont-instagram"></i>
              </a>
              <a href="#" className=" hover:text-primary">
                <i className="icofont-linkedin"></i>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 newsreader-700">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/whats-new" className="hover:text-primary">
                  What's New
                </Link>
              </li>
              <li>
                <Link to="/developers" className=" hover:text-primary">
                  Developers
                </Link>
              </li>
              <li>
                <Link to="/releases" className="hover:text-primary">
                  Releases
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-primary">
                  Support
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className=" hover:text-primary">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 newsreader-700">
              Useful Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/finance" className=" hover:text-primary">
                  Finance
                </Link>
              </li>
              <li>
                <Link to="/category/business" className=" hover:text-primary">
                  Business
                </Link>
              </li>
              <li>
                <Link to="/category/stocks" className=" hover:text-primary">
                  Stocks
                </Link>
              </li>
              <li>
                <Link to="/category/crypto" className=" hover:text-primary">
                  Crypto
                </Link>
              </li>
              <li>
                <Link to="/about" className=" hover:text-primary">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4 newsreader-700">
              Subscribe Now
            </h4>
            <form className="space-y-4" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-2 border border-gray-300 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="flex items-start">
                <input
                  type="checkbox"
                  className="mr-2 mt-1"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <span className="text-sm text-gray-600">
                  I have read and accept the Terms & Policy
                </span>
              </label>
              <button
                type="submit"
                className="w-full bg-primary text-white py-2 rounded hover:bg-primary-dark"
              >
                Subscribe
              </button>
            </form>
            {showWarning && (
              <div className="mt-4 p-2 bg-yellow-100 text-yellow-800 rounded">
                {warningMessage}
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className=" newsreader-500 text-center md:text-left">
            Copyright © Pegions.news {new Date().getFullYear()}.{" "}
            <br className="sm:hidden" /> All rights reserved
          </p>
          <div className="mt-4 md:mt-0">
            <Link to="/privacy-policy" className=" hover:text-primary mr-4">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className=" hover:text-primary">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
