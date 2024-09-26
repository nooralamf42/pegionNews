import React, { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { slugToTitle, titleToSlug, capitalize } from "../utils/slugFormat";
import { formatDate } from "../utils/dateFormat";
import LoadingScreen from "../components.jsx/loadingScreen";
import { fetchSearchNews } from "../feature/news/newsSlice";
import NewsHeader from "../components.jsx/newsHeader";
import StarHeader from "../components.jsx/starHeader";

const SearchArticle = () => {
  const dispatch = useDispatch();
  let { articleTitle, query } = useParams();
  const newsData = useSelector((state) => state.searchNews);
  
  let article = newsData.find(
    (news) => titleToSlug(news.title) === articleTitle
  );

  const relatedPosts = useMemo(() => {
    if (!article || !newsData) return [];
    
    // Filter out the current article and shuffle the remaining articles
    const shuffled = newsData
      .filter(news => news.title !== article.title)
      .sort(() => 0.5 - Math.random());
    
    // Return the first 3 articles from the shuffled array
    return shuffled.slice(0, 3);
  }, [article, newsData]);

  if (!article) {
    dispatch(fetchSearchNews(slugToTitle(query)))
    return <LoadingScreen />
  }

  return (
    <section className="article-section news-cycle-regular mt-10">
      <div className="my-container mx-auto px-4 pb-4">
        <NewsHeader text={`Search Results for "${slugToTitle(query)}"`} className="my-8" />
        <div className="grid grid-cols-12 gap-8">
          <article className="col-span-full lg:col-span-8">
            <h1 className="~text-3xl/5xl mb-4 newsreader-700">{article.title}</h1>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
              <span>By {article.author ? article.author : "anonymous"}</span>
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <img 
              src={article.urlToImage} 
              alt={article.title} 
              className="w-full aspect-video object-cover mb-6"
            />
            <p className="text-gray-700 newsreader-500">{article.description}</p>
          </article>

          <aside className="col-span-full lg:col-span-4">
            <StarHeader title="Related News" className="mb-6" />
            <div className="space-y-6">
              {relatedPosts.map((news) => (
                <Link 
                  key={news.title} 
                  to={`/search/${query}/${titleToSlug(news.title)}`}
                  className="flex gap-4 group"
                >
                  <img 
                    src={news.urlToImage} 
                    alt={news.title} 
                    className="w-[100px] sm:w-[250px] lg:w-[100px] md:aspect-video object-cover"
                  />
                  <div>
                    <h2 className="~text-xl/2xl mb-2 newsreader-500 group-hover:text-primary transition-colors">
                      {news.title}
                    </h2>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{news.author ? news.author : 'anonymous'}</span>
                      <span>{formatDate(news.publishedAt)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default SearchArticle;
