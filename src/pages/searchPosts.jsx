import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import fixImgUrl from "../utils/fixImgUrl";
import { formatDate } from "../utils/dateFormat";
import { slugToTitle, titleToSlug } from "../utils/slugFormat";
import { fetchSearchNews } from "../feature/news/newsSlice";
import NewsHeader from "../components/newsHeader";
import StarHeader from "../components/starHeader";
import Loading from "../components/loading";
import NothingFound from "../components/nothingFound";
import { animate, easeInOut, motion } from "framer-motion";
import updateBadImage from "../utils/updateBadImage";


const SearchPosts = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.newsData.search);
  const searched = useSelector((state) => state.searched);
  if (articles.length < 1 && !searched) {
    dispatch(fetchSearchNews(slugToTitle(query)));
    return <Loading/>
  }
  if(searched && articles.length==0) return <NothingFound/>

  return (
    <section className="search-posts-section news-cycle-regular mt-10">
      <motion.div key={nanoid()} initial={{opacity:0}} transition={{duration: .75, ease: easeInOut}} animate={{opacity:1}} exit={{opacity:0}}  className="my-container mx-auto px-4 pb-4">
        <NewsHeader text={`Search Results for "${slugToTitle(query)}"`} className="my-8" />
        
        <div className="grid grid-cols-8 space-y-8 sm:space-y-0">
          {articles.map((article, index) => (   
            <article key={nanoid()} className={`relative sm:px-4 ${index === 0 ? 'col-span-8 lg:col-span-4 ' : index <= 2 ? 'col-span-full sm:col-span-4 lg:col-span-2 sm:border-l' : 'md:col-span-4'} ${index > 2 && 'flex gap-5 sm:flex-col flex-row col-span-full sm:col-span-4 sm:border-t sm:pb-8 sm:py-12 group'}`}>
              {
                index === 3 && <StarHeader className="-mt-12 sm:-mt-0 absolute top-2 left-0"/>
              }
              <Link to={`/search/${query}/${titleToSlug(article.title)}`} className="">
                <img 
                  src={fixImgUrl(article.image_url)} 
                  alt={article.title}
                  onError={(e)=>updateBadImage(e)} 
                  className={`object-cover mb-4 ${index > 2 ? 'w-[100px] max-w-[100px] sm:max-w-full h-[100px] sm:h-full sm:w-full md:aspect-video' : 'aspect-video sm:aspect-square w-full'}`}
                />
              </Link>
              <div className={`${index > 2 ? 'sm:hidden' : 'hidden'}`}>
                <Link to={`/search/${query}/${titleToSlug(article.title)}`}>{article.title} <span className="text-gray-500 block">Read More..</span></Link>
              </div>
              <div className={`${index > 2 ? "hidden sm:block" : 'pb-5'}`}>
                <h2 className={`${index === 0 ? "~text-2xl/4xl" : index <= 2 ? "~text-xl/2xl" : "~text-xl/3xl"} mb-2 newsreader-700`}>
                  <Link to={`/search/${query}/${titleToSlug(article.title)}`}>
                    {article.title}
                  </Link>
                </h2>
                <p className={`text-gray-700 mb-4 newsreader-500 ${index===0 ? 'line-clamp-3' : 'line-clamp-6'}`}>{article.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>By {article.author ? article.author : "anonymous"}</span>
                  <span>{formatDate(article.pubDate)}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SearchPosts;
