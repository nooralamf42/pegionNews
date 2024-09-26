import React, { useEffect, useState } from 'react'
import Header from './components.jsx/header'
import Footer from './components.jsx/footer'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBusinessNews, fetchCryptoNews, fetchFinanceNews, fetchStockNews} from './feature/news/newsSlice'


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    // dispatch(fetchBusinessNews())
    // dispatch(fetchFinanceNews())
    // dispatch(fetchStockNews())
    // dispatch(fetchCryptoNews())
  },[])
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App