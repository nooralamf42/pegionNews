import React, { useEffect, useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBusinessNews, fetchCryptoNews, fetchFinanceNews, fetchStockNews} from './feature/news/newsSlice'
import Loading from './components/loading/Loading'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchAll = async () => {
      await Promise.all([
        dispatch(fetchBusinessNews()),
        dispatch(fetchFinanceNews()),
        dispatch(fetchStockNews()),
        dispatch(fetchCryptoNews())
      ]);
      setIsLoading(false);
    };

    fetchAll();
  }, [dispatch]);

  if (isLoading) {
    return <Loading/>
  }
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App