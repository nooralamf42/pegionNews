import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { titleToSlug } from "../../utils/slugFormat";
import { formatDate } from "../../utils/dateFormat";
import StarHeader from "../starHeader";
import NewsHeader from "../newsHeader";
import fixImgUrl from "../../utils/fixImgUrl";

function StockMarketSection() {
  const {newsData, error, loading} = useSelector(state=>state) 
  console.log(newsData)

  return (
    <section className="hero-section news-cycle-regular ~mt-5/10">
      <div className="my-container mx-auto px-4 pb-8">
        <div className="grid grid-cols-12 gap-8 pb-4 ">
          <div className="col-span-full md:col-span-6 lg:col-span-8 order-2">
            <img className="w-full aspect-video object-cover" src={fixImgUrl(newsData.stock[0].image_url)} alt={newsData.stock[0].title} />
            <div className="ml-10 relative z-20 bg-white shadow-md p-4 -mt-10 ">
            <Link to={`/category/stock/${titleToSlug(newsData.stock[0].title)}`}>
            <h1 className="~text-2xl/5xl font-bold newsreader-700">{newsData.stock[0].title}</h1>
            </Link>
            <p className="text-gray-700 newsreader-500 line-clamp-2">{newsData.stock[0].description}</p>
            <div className="text-sm text-gray-500">
                  By <span className="font-semibold">{newsData.stock[0].author ? newsData.stock[0].author : 'anonymous'}</span>
                </div>
            </div>
          </div>
          <div className="col-span-full md:col-span-6 lg:col-span-4 mt-4 space-y-4 group">
            <Link to={`/category/stock`} className="flex gap-4 items-center">
            <NewsHeader text="Stock Market"/>
            </Link>
            <StarHeader/>

          <Link to={`/category/stock/${titleToSlug(newsData.stock[4].title)}`} className="gap-1 items-center grid grid-cols-5 border-b py-3">
            <h1 className="~text-xl/2xl col-span-full md:col-span-4 newsreader-500">{newsData.stock[4].title}</h1>
            <img className="w-full border aspect-video col-span-full md:col-span-1 md:aspect-[9/12] object-cover" src={fixImgUrl(newsData.stock[4].image_url)} alt={newsData.stock[4].title} />
            </Link>
            <Link to={`/category/stock/${titleToSlug(newsData.stock[5].title)}`} className="gap-1 items-center grid grid-cols-5 border-b py-3">
            <h1 className="~text-xl/2xl col-span-full md:col-span-4 newsreader-500">{newsData.stock[5].title}</h1>
            <img className="w-full border aspect-video col-span-full md:col-span-1 md:aspect-[9/12] object-cover" src={fixImgUrl(newsData.stock[5].image_url)} alt={newsData.stock[5].title} />
            </Link>
          {newsData.stock.slice(5, 8).map((post) => (
            <div key={nanoid()} className={`pl-4 ${newsData.stock.indexOf(post) === 7 ? '' : 'border-b'} py-1 newsreader-500`}>
                  <Link to={`/category/stock/${titleToSlug(post.title)}`} className="">{post.title}</Link>
  
            </div>
          ))}
          </div>
        </div>
        <div className="border-y-4 border-dashed grid grid-cols-1 md:grid-cols-3 justify-between items-start space-y-4 md:space-y-6 py-6 px-10 md:px-0 group md:gap-10 ~text-xl/3xl">
          <StarHeader title="Recent News" className="col-span-full"/>
            {
              newsData.stock.slice(1,4).map((post, index)=>(
                  <div className={`flex items-center justify-center gap-6 w-fit`} key={nanoid()}>
                    <Link to={`/category/stock/${titleToSlug(post.title)}`} className="md:max-w-[350px] newsreader-600">{post.title}</Link>
                  </div>
              ))
            }
        </div>
      </div>
    </section>
  );
}

export default StockMarketSection;
