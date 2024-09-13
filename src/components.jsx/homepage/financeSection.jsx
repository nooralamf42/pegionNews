import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; 
import { nanoid } from "@reduxjs/toolkit";
import { formatDate } from "../../utils/dateFormat";
import { titleToSlug } from "../../utils/slugFormat";

const FinanceNewsSection = () => {
  // Use useSelector to get data from the Redux store
  const financeNews = useSelector((state) => state.newsData.finance);

  return (
    <section className="editor-choice-two-area mt-60 mb-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h1>Finance</h1>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            {/* Map over the editorChoice data and render articles */}
            {financeNews.slice(0, 3).map((article) => (
              <article
                key={nanoid()} // Ensure unique key if id is available
                className="post-block-style-wrapper post-block-template-four"
              >
                <div className="post-block-style-inner post-block-list-style-inner">
                  <div className="post-block-content-wrap">
                    <div className="post-item-title">
                      <h2 className="post-title">
                        <Link to={`/category/finance/${titleToSlug(article.title)}`}>{article.title}</Link>
                      </h2>
                    </div>
                    <div className="post-excerpt-box">
                      <p>{article.description}</p>
                    </div>
                    <div className="post-bottom-meta-list">
                      <div className="post-meta-author-box">
                        By <a href="javascript:void(0)">{article.author ? article.author : 'anonymous'}</a>
                      </div>
                      <div className="post-meta-date-box">{formatDate(article.publishedAt)}</div>
                    </div>
                  </div>
                  <div className="post-block-media-wrap">
                    <Link to={`/category/finance/${titleToSlug(article.title)}`}>
                      <img src={article.urlToImage} alt={article.title} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="section-title mt-custom">
              <h2 className="title-block">Recent Articles</h2>
            </div>
            {/* Map over the mostRead data and render articles */}
            {financeNews.slice(3, 8).map((article) => (
              <article
                key={nanoid()} // Ensure unique key if id is available
                className="post-block-style-wrapper post-block-template-two most-read-block-list"
              >
                <div className="post-block-style-inner post-block-list-style-inner">
                  <div className="post-block-media-wrap">
                    <Link to={`/category/finance/${titleToSlug(article.title)}`}>
                      <img src={article.urlToImage} alt={article.title} />
                    </Link>
                  </div>
                  <div className="post-block-content-wrap">
                    <div className="post-item-title">
                      <h2 className="post-title">
                        <Link to={`/category/finance/${titleToSlug(article.title)}`}>{article.title}</Link>
                      </h2>
                    </div>
                    <div className="post-bottom-meta-list">
                      <div className="post-meta-author-box">
                        <a href="javascript:void(0)">{article.author ? article.author : 'anonymous'}</a>
                      </div>
                      <div className="post-meta-date-box">{formatDate(article.publishedAt)}</div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceNewsSection;
