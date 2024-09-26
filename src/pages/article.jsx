import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { titleToSlug } from "../utils/slugFormat";
import { useSelector } from "react-redux";
import { formatDate } from "../utils/dateFormat";
import LoadingScreen from "../components.jsx/loadingScreen";

const Article = () => {
  let { articleTitle, category } = useParams();
  const newsData = useSelector((state) => state.newsData[category]);
  let article = newsData.find(
    (news) => titleToSlug(news.title) === articleTitle
  );
  console.log(article);
  if(!article) return <LoadingScreen/>
  return (
    <div className="post-single-area mt-60">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 single-blog-content">
            <div className="post-single-wrapper">
              <h1 className="post-title">{article?.title}</h1>
              <div className="post-bottom-meta-list post-meta-wrapper">
                <div className="post-left-details-meta">
                  <div className="post-meta-author-box">
                    By{" "}
                    <a href="#">
                      {article.author ? article.author : "anonymous"}
                    </a>
                  </div>
                  <div className="post-meta-date-box">
                    {formatDate(article?.publishedAt)}
                  </div>
                </div>
              </div>
              <div className="post-featured-image">
                <img src={article?.urlToImage} alt="Post Image" />
              </div>
              <div className="theme-blog-details">
                <p>{article?.description}</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="sidebar blog-sidebar">
              <div className="section-title">
                <h2 className="title-block">Related News</h2>
              </div>
              {newsData?.filter(news=>news!=article).slice(0, 3).map((news) => (
                <article
                  key={news.title}
                  className="post-block-style-wrapper post-block-template-two most-read-block-list"
                >
                  <div className="post-block-style-inner post-block-list-style-inner">
                    <div className="post-block-media-wrap">
                      <img src={news.urlToImage} alt={news.title} />
                    </div>
                    <div className="post-block-content-wrap">
                      <div className="post-item-title">
                        <h2 className="post-title">
                         {news.title}
                        </h2>
                      </div>
                      <div className="post-bottom-meta-list">
                        <div className="post-meta-author-box">
                          <a href="#">{news.author? news.author : 'anonymous'}</a>
                        </div>
                        <div className="post-meta-date-box">{formatDate(news.publishedAt)}</div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
