import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { formatDate } from "../../utils/dateFormat";
import { titleToSlug } from "../../utils/slugFormat";
import NewsHeader from "../newsHeader";
import StarHeader from "../starHeader";
import fixImgUrl from "../../utils/fixImgUrl";

const FinanceNewsSection = () => {
  // Use useSelector to get data from the Redux store
  const financeNews = useSelector((state) => state.newsData.finance);

  return (
    <section className="news-cycle-regular mt-10">
      <div className="my-container space-y-14">
        <Link to="/category/finance"><NewsHeader text="Finance" /></Link>

        <div className="grid grid-cols-6 ~gap-5/14 group items-center">
          <article
            key={nanoid()} // Ensure unique key if id is available
            className="overflow-hidden transition-all duration-300 md:col-span-4 col-span-6"
          >
            <Link
              className="overflow-hidden inline-block"
              to={`/category/finance/${titleToSlug(financeNews[0].title)}`}
            >
              <img
                src={fixImgUrl(financeNews[0].image_url)}
                alt={financeNews[0].title}
                className="aspect-[16/7] w-full object-cover"
              />
            </Link>
            <div className="p-2 space-y-4">
              <Link
                className="~text-2xl/5xl font-bold newsreader-700 line-clamp-3"
                to={`/category/finance/${titleToSlug(financeNews[0].title)}`}
              >
                {financeNews[0].title}
              </Link>
              <h2 className="text-xl/2xl font-bold line-clamp-2">
                {financeNews[0].description}
              </h2>
              <h3>
                By :
                {financeNews[0].source_name ? financeNews[0].source_name : "Anonymous"}
              </h3>
            </div>
          </article>
          <StarHeader className="md:hidden block col-span-6"/>
          {financeNews.slice(1, 5).map((article, index) => (
            
            <article
            key={nanoid()} // Ensure unique key if id is available
            className={`space-y-4 md:col-span-2 col-span-3 ${index !== 0 &&  "md:hover:scale-95 hover:rounded-2xl" } overflow-hidden transition-all duration-300 relative`}
            >
            {index === 0 && <StarHeader className="md:flex hidden"/>}
              <Link
                className="overflow-hidden inline-block"
                to={`/category/finance/${titleToSlug(article.title)}`}
              >
                <img
                  src={fixImgUrl(article.image_url)}
                  alt={article.title}
                  className="aspect-square w-full object-cover"
                />
              </Link>
              <div className="p-2">
                <Link
                  className="newsreader-500 ~text-md/2xl line-clamp-4"
                  to={`/category/finance/${titleToSlug(article.title)}`}
                >
                  {article.title}
                </Link>
                <h3>By : {article.source_name ? article.source_name : "Anonymous"}</h3>
                {/* <h3>{formatDate(article.publishedAt)}</h3> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinanceNewsSection;
