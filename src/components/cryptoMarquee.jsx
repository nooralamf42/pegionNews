import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { nanoid } from '@reduxjs/toolkit';
import { motion } from 'framer-motion';

const API_URL = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usdt.json';
const POPULAR_TOKENS = ['btc', 'eth', 'ada', 'sol', 'bnb', 'xrp', 'dot', 'ltc', 'link', 'xlm', 'doge', 'matic', 'uni', 'avax', 'shib', 'atom'];

const CryptoMarquee = () => {
  const [cryptoPrices, setCryptoPrices] = useState({});
  const pricesRef = useRef({});
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const fetchPrices = async () => {
    try {
      const response = await axios.get(API_URL);
      const filteredPrices = Object.fromEntries(
        Object.entries(response.data.usdt).filter(([symbol]) => POPULAR_TOKENS.includes(symbol))
      );

      // Update prices in place without re-rendering the entire component
      pricesRef.current = { ...pricesRef.current, ...filteredPrices };
      setCryptoPrices({ ...pricesRef.current });
    } catch (err) {
      console.error("Error fetching cryptocurrency prices:", err.message);
    }
  };

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 300000); // Fetch every 5 minutes
    return () => clearInterval(interval);
  }, []);

  // Handle hover to stop and resume the marquee
  const handleMouseEnter = () => {
    setIsHovered(true);
    contentRef.current.style.animationPlayState = 'paused';
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    contentRef.current.style.animationPlayState = 'running';
  };

  const formatPrice = (price) => {
    if (typeof price !== 'number' || isNaN(price)) return 'N/A';
    const usdPrice = 1 / price;
    return usdPrice < 1 ? usdPrice.toFixed(5) : usdPrice.toFixed(2);
  };

  if (Object.keys(cryptoPrices).length === 0) {
    return <div className="w-full bg-gray-800 text-white p-4 my-container">Loading cryptocurrency prices...</div>;
  }

  return (
    <div 
      className="w-full bg-white text-black p-2 overflow-hidden my-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      <div
        className="flex"
        ref={contentRef}
      >
       <motion.div
        initial={{ x: `${0}` }}
        animate={{ x: `${"-100%"}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {Object.entries(cryptoPrices).map((data) => {
          return  <div key={nanoid()} className="whitespace-nowrap inline-block mr-6">
          <span className="font-semibold mr-2 text-neutral-900 tracking-tight">{data[0].toUpperCase()}</span>
          <span className='text-neutral-700 tracking-tight'>${formatPrice(data[1])}</span>
        </div>
        })}
      </motion.div>
      <motion.div
        initial={{ x: `${0}` }}
        animate={{ x: `${"-100%"}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {Object.entries(cryptoPrices).map((data) => {
          return  <div key={nanoid()} className="whitespace-nowrap inline-block mr-6">
          <span className="font-semibold mr-2 text-neutral-900 tracking-tight">{data[0].toUpperCase()}</span>
          <span className='text-neutral-700 tracking-tight'>${formatPrice(data[1])}</span>
        </div>
        })}
      </motion.div>
      </div>
    </div>
  );
};

export default CryptoMarquee;

