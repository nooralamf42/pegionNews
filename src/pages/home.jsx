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
  const status = useSelector(state=>state.status)
  const error = useSelector(state=>state.error)
  
 
  return (
    <motion.main key={nanoid()} initial={{opacity:0}} transition={{duration: .75, ease: easeInOut}} animate={{opacity:1}} exit={{opacity:0}} >
      <BusinessSection/>
      <FinanceNewsSection />
      {/* <SpringyLine/> */}
      <StockMarketSection />
      <CryptoSection /> 
      <PoliticsSection/>
      <TechSection/>
      <WealthNewsSection/>
      <WorldSection/>
      <MutualFundSection/>
      <SportsSection/>
    </motion.main>
  );
}

export default Home;
