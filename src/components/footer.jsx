import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../public/images/image.jpg";
import dot from "../public/images/dot3.png";
import sslImage1 from "../public/images/c1.jpg";
import sslImage2 from "../public/images/c2.jpg";
import sslImage3 from "../public/images/c3.jpg";
import sslPdf1 from "../public/pdfs/ssl1.pdf";
import sslPdf2 from "../public/pdfs/ssl2.pdf";
import sslPdf3 from "../public/pdfs/ssl3.pdf";
import emailjs from '@emailjs/browser';
const EMAIL_KEY = import.meta.env.VITE_EMAIL_KEY

const Footer = () => {
  const formRef = useRef(null)
  const [email, setEmail] = useState('')
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
      emailjs
      .sendForm('service_nf6f5ve', 'template_7lgdkx5', formRef.current, {
        publicKey : EMAIL_KEY
      }).then(()=>console.log("email sended")).catch((e)=>console.log(e))
      setEmail("");
      setIsChecked(false);
      setWarningMessage("Successfully subscribed!");
      setShowWarning(true);
      setTimeout(() => {
        setShowWarning(false);
      }, 3000);
    }
  };

  const navigate = useNavigate();

  return (
    <footer className="bg-secondry text-white py-10">
      <div className="my-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_2fr] gap-8">
          <div className="space-y-4">
            <div
              onClick={() => navigate("/")}
              className="w-fit mx-auto flex gap-4 flex-col items-center justify-center cursor-pointer group"
            >
              <div className="flex items-end animate_pegion_body relative mix-blend-screen">
                <img
                  src={logo}
                  className="~w-20/24 mix-blend-screen"
                  alt=""
                  srcSet=""
                />
                <div className="~w-8/12 mb-1 -ml-2">
                  <img
                    src={dot}
                    className="~w-8/12 animate_news_scroll top-2 right-3"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <span className="pirata-one-regular whitespace-nowrap uppercase text-white ~text-4xl/6xl">
                the pigeons news
              </span>
            </div>
            <p className="newsreader-500">
              Stay updated with the latest news in finance, business, stocks,
              and crypto. Pigeons.news provides you with the most relevant and
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
                <Link to="/#" className="hover:text-primary">
                  What's New
                </Link>
              </li>
              <li>
                <Link to="#" className=" hover:text-primary">
                  Developers
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary">
                  Releases
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary">
                  Support
                </Link>
              </li>
              <li>
                <Link to="#" className=" hover:text-primary">
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
            <form className="space-y-4" ref={formRef} onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="your@email.com"
                name="email"
                value={email}
                className="w-full p-2 border text-black border-gray-300 rounded"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="flex items-start">
                <input
                  type="checkbox"
                  className="mr-2 mt-1"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                <span className="text-sm text-white">
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
          <div className="grid grid-cols-3 mt-8 justify-items-center">
            <h1 className="text-center col-span-3 newsreader-700 text-xl mb-4">Certification Authority</h1>
            <a href={sslPdf1}><img src={sslImage1} className="w-20" alt="ssl image" /></a>
            <a href={sslPdf2}><img src={sslImage2} className="w-20" alt="ssl image" /></a>
            <a href={sslPdf3}><img src={sslImage3} className="w-20" alt="ssl image" /></a>
          </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className=" newsreader-500 text-center md:text-left">
            Copyright © The Pigeons News {new Date().getFullYear()}.{" "}
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
