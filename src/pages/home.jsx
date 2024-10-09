import React from "react";
import FinanceNewsSection from "../components/homepage/financeSection";
import StockMarketSection from "../components/homepage/stockMarketSection";
import CryptoSection from "../components/homepage/cryptoSection";
import BusinessSection from "../components/homepage/businessSection";
import { useSelector } from "react-redux";
import TechSection from "../components/homepage/techSection";
import WealthNewsSection from "../components/homepage/wealthSection";
import WorldSection from "../components/homepage/worldSection";
import MutualFundSection from "../components/homepage/mutualFundSection";
import SpringyLine from "../components/springyDivider";
import { animate, easeInOut, motion } from "framer-motion";
import { nanoid } from "@reduxjs/toolkit";
import { PoliticsSection } from "../components/homepage/politicsSection";
import { SportsSection } from "../components/homepage/sportsSection";

function Home() {
  const news = useSelector(state=>state.newsData)
  const error = useSelector(state=>state.error)
  
 
  return (
    <motion.main key={nanoid()} initial={{opacity:0}} transition={{duration: .75, ease: easeInOut}} animate={{opacity:1}} exit={{opacity:0}} >
      <BusinessSection/>
      {news.business.length>0 && <FinanceNewsSection />}
      {/* <SpringyLine/> */}
      {news.finance.length>0 && <StockMarketSection />}
      {news.stock.length>0 && <CryptoSection />}
      {news.crypto.length>0 && <PoliticsSection/>}
      {news.politics.length>0 && <TechSection/>} 
      {news.tech.length>0 && <WealthNewsSection/>}
      {news.wealth.length>0 && <WorldSection/>}
      {news.world.length>0 && <MutualFundSection/>}
      {news.mutual_fund.length>0 && <SportsSection/>}
    </motion.main>
  );
}

export default Home;
