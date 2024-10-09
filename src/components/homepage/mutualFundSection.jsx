import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { formatDate } from "../../utils/dateFormat";
import { titleToSlug } from "../../utils/slugFormat";
import NewsHeader from "../newsHeader";
import StarHeader from "../starHeader";
import fixImgUrl from "../../utils/fixImgUrl";
import updateBadImage from "../../utils/updateBadImage";
import NewsSkeletonLoader from "./newsSkeletonLoader";

const MutualFundSection = () => {
  let mutual_fund = useSelector((state) => state.newsData.mutual_fund);
  if(mutual_fund.length<=0)
    return <NewsSkeletonLoader name={'mutual_fund'}/>
  return (
    <section className="news-cycle-regular mt-10">
      <div className="my-container space-y-14">
        <NewsHeader text="Mutual Fund" />

        <div className="grid grid-cols-12 ~gap-5/14 group">
          <article
            key={nanoid()} // Ensure unique key if id is available
            className="overflow-hidden transition-all duration-300 md:col-span-6 col-span-12"
          >
            <Link
              className="overflow-hidden inline-block"
              to={`/category/crypto/${titleToSlug(mutual_fund[0].title)}`}
            >
              <img
                src={fixImgUrl(mutual_fund[0].image_url)}
                onError={(e)=>updateBadImage(e)}
                alt={mutual_fund[0].title}
                className="aspect-[16/7] w-full object-cover"
              />
            </Link>
            <div className="p-2 space-y-4">
              <Link
                className="~text-2xl/5xl font-bold newsreader-700 line-clamp-3"
                to={`/category/crypto/${titleToSlug(mutual_fund[0].title)}`}
              >
                {mutual_fund[0].title}
              </Link>
              <h2 className="text-xl/2xl font-bold line-clamp-2">
                {mutual_fund[0].description}
              </h2>
              <h3>
                By :
                {mutual_fund[0].author ? mutual_fund[0].author : "Anonymous"}
              </h3>
            </div>
          </article>
          <StarHeader className="md:hidden block col-span-12"/>
          {mutual_fund.slice(1, 3).map((article, index) => (
            
            <article
            key={nanoid()} // Ensure unique key if id is available
            className={`space-y-4 md:col-span-3 col-span-6 overflow-hidden transition-all duration-300 relative`}
            >
              <Link
                className="overflow-hidden inline-block"
                to={`/category/crypto/${titleToSlug(article.title)}`}
              >
                <img
                  src={fixImgUrl(article.image_url)}
                  onError={(e)=>updateBadImage(e)}
                  alt={article.title}
                  className="aspect-square w-full object-cover"
                />
              </Link>
              <div className="p-2">
                <Link
                  className="newsreader-500 ~text-lg/2xl line-clamp-3"
                  to={`/category/crypto/${titleToSlug(article.title)}`}
                >
                  {article.title}
                </Link>
                <h3>By : {article.author ? article.author : "Anonymous"}</h3>
                {/* <h3>{formatDate(article.publishedAt)}</h3> */}
              </div>
            </article>
          ))}
        </div>
        <div className="border-y grid grid-cols-1 md:grid-cols-3 justify-between items-center space-y-4 md:space-y-6 py-6 px-10 md:px-0 group">
          <StarHeader title="Trending News" className="col-span-full"/>
            {
              mutual_fund.slice(3,6).map((post)=>(
                  <div className={`flex items-center justify-center gap-6 w-fit`} key={nanoid()}>
                    <img src={fixImgUrl(post.image_url)} onError={(e)=>updateBadImage(e)} alt={post.title} className="w-full aspect-square object-cover max-w-[100px] "/>
                    <Link to={`/category/business/${titleToSlug(post.title)}`} className="md:max-w-[220px] newsreader-600 line-clamp-3">{post.title}</Link>
                  </div>
              ))
            }
        </div>
      </div>
    </section>
  );
};

export default MutualFundSection;
