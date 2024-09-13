import React from "react";
import FinanceNewsSection from "../components.jsx/homepage/financeSection";
import StockMarketSection from "../components.jsx/homepage/stockMarketSection";
import CryptoSection from "../components.jsx/homepage/cryptoSection";
import BusinessSection from "../components.jsx/homepage/businessSection";
import { useSelector } from "react-redux";
import LoadingScreen from "../components.jsx/loadingScreen";
function Home() {
  const status = useSelector(state=>state.status)
  if(status!=='succeeded') return <LoadingScreen/>
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
