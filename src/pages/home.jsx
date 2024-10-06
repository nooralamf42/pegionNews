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

function Home() {
  const status = useSelector(state=>state.status)
  const error = useSelector(state=>state.error)
  
 
  return (
    <>
      <BusinessSection/>
      <FinanceNewsSection />
      {/* <SpringyLine/> */}
      <StockMarketSection />
      <CryptoSection /> 
      <TechSection/>
      <WealthNewsSection/>
      <WorldSection/>
      <MutualFundSection/>
    </>
  );
}

export default Home;
