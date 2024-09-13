import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { formatDate } from "../utils/dateFormat";
import { slugToTitle, titleToSlug } from "../utils/slugFormat";
import LoadingScreen from "../components.jsx/loadingScreen";
import { fetchSearchNews } from "../feature/news/newsSlice";

const SearchPosts = () => {
  const articles = useSelector(
    (state) => state.searchNews
  );
  const {query} = useParams()
  const dispatch = useDispatch()
  if(articles.length<1){
    dispatch(fetchSearchNews(slugToTitle(query)))
    return <LoadingScreen/>
  }
  return (
    <>
      <div className="theme-blog-page-area mb-80 mt-40">
        <div className="container">
          <div className="col-lg-12">
            <div className="row">
              {articles.map((article) => (
                <article
                  key={nanoid()}
                  className="post-block-style-wrapper post-block-template-one sm-mt-24 col-lg-6"
                >
                  <div className="post-block-style-inner">
                    <div className="post-block-media-wrap">
                      <Link to={`${titleToSlug(article['title'])}`}>
                        <img src={article.urlToImage} alt={article.title} />
                      </Link>
                    </div>
                    <div className="post-block-content-wrap">
                      <div className="post-item-title">
                        <h2 className="post-title">
                          <Link to={`${titleToSlug(article.title)}`}>{article.title}</Link>
                        </h2>
                      </div>
                      <div className="post-excerpt-box">
                        <p>{article.description}</p>
                      </div>
                      <div className="post-bottom-meta-list">
                        <div className="post-meta-author-box">
                          By{" "}
                          <Link to={article.link}>
                            {article.author ? article.author : "anonymous"}
                          </Link>
                        </div>
                        <div className="post-meta-date-box">
                          {formatDate(article.publishedAt)}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPosts;
