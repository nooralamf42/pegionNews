import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../public/images/logo.png'
const Footer = () => {
  return (
    <footer className="theme-footer-area">
      <div className="footer-top pt-80 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className='row'>

                <div className="footer-logo col-lg-3">
                  <Link to="/">
                    <img src={logo} className='logo theme-logo' alt="Pegions.news Logo" />
                  </Link>
                </div>
              <div className="footer-widget widget col">
                <div className='mb-3'>
                  <Link to="/">pegions.news</Link>
                </div>
                <p>
                  Stay updated with the latest news in finance, business, stocks, and crypto. Pegions.news
                  provides you with the most relevant and timely information to help you make informed
                  decisions.
                </p>
                <div className="footer-social">
                  <a href="#"><i className="icofont-facebook"></i></a>
                  <a href="#"><i className="icofont-twitter"></i></a>
                  <a href="#"><i className="icofont-instagram"></i></a>
                  <a href="#"><i className="icofont-linkedin"></i></a>
                </div>
              </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer-widget widget widget-nav-menu ml-70">
                <h4 className="widget-title">Resources</h4>
                <ul className="menu">
                  <li><Link to="/whats-new">What’s New</Link></li>
                  <li><Link to="/developers">Developers</Link></li>
                  <li><Link to="/releases">Releases</Link></li>
                  <li><Link to="/support">Support</Link></li>
                  <li><Link to="/cookie-policy">Cookie Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-2">
              <div className="footer-widget widget widget-nav-menu">
                <h4 className="widget-title">Useful Links</h4>
                <ul className="menu">
                  <li><Link to="/cateory/finance">Finance</Link></li>
                  <li><Link to="/category/business">Business</Link></li>
                  <li><Link to="/category/stocks">Stocks</Link></li>
                  <li><Link to="/category/crypto">Crypto</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className="footer-widget widget widget-newsletter ml-30">
                <h4 className="widget-title">Subscribe Now</h4>
                <div className="footer-newsletter-wrapper">
                  <form action="/newsletter" method="post">
                    <input type="email" placeholder="your@email.com" name="email" id="footer-email" />
                    <input type="submit" value="" id="footer-submit" />
                    <label className="custom-label">
                      I have read and accept the Terms &amp; Policy
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </form>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="copyright-text">
                <p>Copyright © Pegions.news 2023. All rights reserved</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-menu">
                <ul className="footer-nav">
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                  <li><Link to="/terms-of-use">Terms of Use</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;