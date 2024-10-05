import React, { useEffect, useState } from 'react'
import Header, { Navbar } from './components/header'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBusinessNews, fetchCryptoNews, fetchFinanceNews, fetchMutualFundNews, fetchStockNews, fetchTechNews, fetchWealthNews, fetchWorldNews} from './feature/news/newsSlice'
import Loading from './components/loading'
import { ReactLenis, useLenis } from 'lenis/react'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  // const lenis = useLenis((lenisData) => {
  //   console.log(lenisData)
  //   console.log(lenisData.scroll)
  // })
  useEffect(() => {
    const fetchAll = async () => {
      await Promise.all([
        dispatch(fetchBusinessNews()),
        // dispatch(fetchFinanceNews()),
        // dispatch(fetchStockNews()),
        // dispatch(fetchCryptoNews()),
        // dispatch(fetchTechNews()),
        // dispatch(fetchWealthNews()),
        // dispatch(fetchWorldNews()),
        // dispatch(fetchMutualFundNews())
      ]);
      setIsLoading(false);
    };

    fetchAll();
  }, [dispatch]);

  if (isLoading) {
    return <Loading/>
  }
  return (
    <ReactLenis root>
      <Header/>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </ReactLenis>
  )
}

export default App