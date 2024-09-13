import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; 
import { nanoid } from "@reduxjs/toolkit";
import { formatDate } from "../../utils/dateFormat";
import { titleToSlug } from "../../utils/slugFormat";

const StockMarketSection = () => {
  const stockNews = useSelector((state) => state.newsData.stock);

  // Check if stockNews has data to avoid errors
  if (!stockNews || stockNews.length === 0) {
    return <div>No stock market news available.</div>;
  }

  return (
    <section className="most-popular-area mt-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h1>Stock Markets</h1>
            </div>
          </div>
        </div>

        <div className="row mb-50">
          {/* Feature the first news item */}
          <div className="col-lg-5">
            <article className="post-block-style-wrapper post-block-template-one custom-spacing">
              <div className="post-block-style-inner">
                <div className="post-block-media-wrap">
                  <Link to={`/category/stock/${titleToSlug(stockNews[0].title)}`}>
                    <img src={stockNews[0].urlToImage} alt={stockNews[0].title} />
                  </Link>
                </div>
                <div className="post-block-content-wrap">
                  <div className="post-item-title">
                    <h2 className="post-title">
                      <Link to={`/category/stock/${titleToSlug(stockNews[0].title)}`}>{stockNews[0].title}</Link>
                    </h2>
                  </div>
                  <div className="post-excerpt-box">
                    <p>{stockNews[0].description}</p>
                  </div>
                  <div className="post-bottom-meta-list">
                    <div className="post-meta-author-box">
                      By <a href="javascript:void(0)">{stockNews[0].author ? stockNews[0].author : 'anonymous'}</a>
                    </div>
                    <div className="post-meta-date-box">{formatDate(stockNews[0].publishedAt)}</div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Render two more news items */}
          <div className="col-lg-7">
            {[1, 2].map((index) => (
              <article key={nanoid()} className="post-block-style-wrapper post-block-template-four">
                <div className="post-block-style-inner post-block-list-style-inner">
                  <div className="post-block-content-wrap">
                    <div className="post-item-title">
                      <h2 className="post-title">
                        <Link to={`/category/stock/${titleToSlug(stockNews[index].title)}`}>{stockNews[index].title}</Link>
                      </h2>
                    </div>
                    <div className="post-excerpt-box">
                      <p>{stockNews[index].description}</p>
                    </div>
                    <div className="post-bottom-meta-list">
                      <div className="post-meta-author-box">
                        By <a href="javascript:void(0)">{stockNews[index].author ? stockNews[index].author : 'anonymous'}</a>
                      </div>
                      <div className="post-meta-date-box">{formatDate(stockNews[index].publishedAt)}</div>
                    </div>
                  </div>
                  <div className="post-block-media-wrap">
                    <Link to={`/category/stock/${titleToSlug(stockNews[index].title)}`}>
                      <img src={stockNews[index].urlToImage} alt={stockNews[index].title} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="row divider-border">
          {/* Render the next three news items */}
          {[3, 4, 5].map((index) => (
            <div key={nanoid()} className={`col-lg-4  border-gray-500 ${index!==5 && 'lg:border-r-[0.5px]'}`}>
              <div className="post-block-template-three-wrapper popular-post-block-bottom-wrapper">
                <article className="post-block-style-wrapper post-block-template-three">
                  <div className="post-block-style-inner post-block-list-style-inner-three">
                    <div className="post-block-number-wrap">
                      <span className="post-number-counter">{index - 2}</span>
                    </div>
                    <div className="post-block-content-wrap">
                      <div className="post-item-title">
                        <h2 className="post-title">
                          <Link to={`/category/stock/${titleToSlug(stockNews[index]?.title)}`}>{stockNews[index]?.title}</Link>
                        </h2>
                      </div>
                      <div className="post-bottom-meta-list">
                        <div className="post-meta-author-box">
                          By <a href="javascript:void(0)">{stockNews[index].author ? stockNews[index].author : 'anonymous'}</a>
                        </div>
                        <div className="post-meta-date-box">{formatDate(stockNews[index]?.publishedAt)}</div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StockMarketSection;
