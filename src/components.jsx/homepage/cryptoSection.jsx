import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/dateFormat";
import { titleToSlug } from "../../utils/slugFormat";

const CryptoSection = () => {
    const cryptoNews = useSelector(state=>state.newsData.crypto)
    return (
      <section className="popular-posts-column-area mt-60 mb-35">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h1>Crypto Market</h1>
            </div>
          </div>
          <div className="row">
            {cryptoNews.slice(0, 6).map((post, index) => (
              <div className="col-lg-4" key={index}>
                <article className="post-block-style-wrapper post-block-template-one post-block-template-medium mb-40">
                  <div className="post-block-style-inner">
                    <div className="post-block-media-wrap">
                      <Link to={`/category/crypto/${titleToSlug(post.title)}`}>
                        <img src={post.urlToImage} alt={post.postTitle} />
                      </Link>
                    </div>
                    <div className="post-block-content-wrap">
                      <div className="post-item-title">
                        <h2 className="post-title">
                          <Link to={`/category/crypto/${titleToSlug(post.title)}`}>{titleToSlug(post.title)}</Link>
                        </h2>
                      </div>
                      <div className="post-excerpt-box">
                        <p>{post.description}</p>
                      </div>
                      <div className="post-bottom-meta-list">
                        <div className="post-meta-author-box">
                          By <a href="javascript:void(0)">{post.author? post.author : 'anonymous'}</a>
                        </div>
                        <div className="post-meta-date-box">{formatDate(post.publishedAt)}</div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default CryptoSection;
  