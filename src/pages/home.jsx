import React from "react";
import FinanceNewsSection from "../components/homepage/financeSection";
import StockMarketSection from "../components/homepage/stockMarketSection";
import CryptoSection from "../components/homepage/cryptoSection";
import BusinessSection from "../components/homepage/businessSection";
import { useSelector } from "react-redux";

function Home() {
  const status = useSelector(state=>state.status)
  const error = useSelector(state=>state.error)
  
 
  return (
    <>
      <BusinessSection/>
      <FinanceNewsSection />
      <StockMarketSection />
      <CryptoSection /> 
    </>
  );
}

export default Home;
