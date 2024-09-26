import React from "react";
import FinanceNewsSection from "../components.jsx/homepage/financeSection";
import StockMarketSection from "../components.jsx/homepage/stockMarketSection";
import CryptoSection from "../components.jsx/homepage/cryptoSection";
import BusinessSection from "../components.jsx/homepage/businessSection";
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
