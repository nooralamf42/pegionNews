import React, { useEffect, useState } from 'react'
import './public/css/vendor/bootstrap.min.css'
import './public/css/vendor/font-awesome.css'
import './public/css/vendor/icon-font.css'
import './public/css/vendor/magnific-popup.css'
import './public/css/vendor/remixicon.css'
import './public/css/vendor/slick.css'
import './public/css/vendor/slick-theme.css'
import './public/css/app.css'
import './public/css/responsive.css'
import Header from './components.jsx/header'
import Footer from './components.jsx/footer'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBusinessNews, fetchCryptoNews, fetchFinanceNews, fetchStockNews} from './feature/news/newsSlice'


function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchBusinessNews())
    dispatch(fetchFinanceNews())
    dispatch(fetchStockNews())
    dispatch(fetchCryptoNews())
  },[])
  return (
    <main className='main-wrapper' id='main-wrapper'>
      <Header/>
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default App