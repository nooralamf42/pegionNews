import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { titleToSlug, capitalize } from "../utils/slugFormat";
import { useDispatch, useSelector } from "react-redux";
import { formatDate } from "../utils/dateFormat";
import NewsHeader from "../components/newsHeader";
import StarHeader from "../components/starHeader";
import { useMemo } from "react";
import fixImgUrl from "../utils/fixImgUrl";
import generateParagraphs from "../utils/generateParas";
import { nanoid } from "@reduxjs/toolkit";
import { fetchCurrentPageNews } from "../feature/news/newsSlice";
import Loading from "../components/loading";

const Article = () => {
  let { articleTitle, category, query} = useParams();
  const searched = useSelector(state=>state.searched)
  if(query){
    category = "search"
  }
  alert(searched)
  const newsData = useSelector((state) => state.newsData[category]);
  console.log(newsData)
  let article = newsData.find((news) => titleToSlug(news.title) === articleTitle
  );

  const dispatch = useDispatch()

  const relatedPosts = useMemo(() => {
    if (!article || !newsData || searched) {
      return []
    };
    
    // Filter out the current article and shuffle the remaining articles
    const shuffled = newsData
      .filter(news => news?.title !== article?.title)
      .sort(() => 0.5 - Math.random());
    
    // Return the first 3 articles from the shuffled array
    return shuffled.slice(0, 3);
  }, [article, newsData]);
 
  if (!article && !searched) {
    dispatch(fetchCurrentPageNews({query: articleTitle, category}))
    return <Loading/>
  }
  if(searched && (!article || newsData.length>0)){
    return <h1>no article found</h1>
  }

  return (
    <section className="article-section news-cycle-regular mt-10">
      <div className="my-container mx-auto px-4 pb-4">
        <NewsHeader text={`${capitalize(category)} News`} className="my-8" />
        <div className="grid grid-cols-12 gap-8 ~pb-14/20">
          <article className="col-span-full lg:col-span-8">
            <h1 className="~text-3xl/5xl mb-4 newsreader-700">{article.title}</h1>
            <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
              <span>By {article.source_name ? article.source_name : "anonymous"}</span>
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <img 
              src={fixImgUrl(article.image_url)} 
              alt={article.title} 
              className="w-full aspect-video object-cover mb-6"
            />
            {
              generateParagraphs(article.content ? article.content : article.description).map(article=>(
                <p id={nanoid()} className="mt-6 text-gray-700 newsreader-400 ~text-lg/2xl leading-snug">{article}</p>
              ))
            }
          </article>

          <aside className="col-span-full lg:col-span-4">
            <StarHeader title="Related News" className="mb-6" />
            <div className="space-y-6">
              {relatedPosts.map((news) => (
                <Link 
                  key={nanoid()}
                  to={`/category/${category}/${titleToSlug(news.title)}`}
                  className="flex gap-4 group"
                >
                  <img 
                    src={fixImgUrl(news.image_url)} 
                    alt={news.title} 
                    className="w-[100px] sm:w-[250px] lg:w-[100px] md:aspect-video object-cover"
                  />
                  <div>
                    <h2 className="~text-xl/2xl mb-2 newsreader-500 group-hover:text-primary transition-colors">
                      {news.title}
                    </h2>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{news.source_name ? news.source_name : 'anonymous'}</span>
                      <span>{formatDate(news.pubDate)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </aside>
        </div>
        <div className="border-y-4 border-dashed grid grid-cols-1 md:grid-cols-3 justify-between items-start space-y-4 md:space-y-6 py-6 px-10 md:px-0 group md:gap-10 ~text-xl/3xl">
          <StarHeader title="Recent News" className="col-span-full"/>
            {
              newsData.slice(1,4).map((post, index)=>(
                  <div className={`flex items-center justify-center gap-6 w-fit`} key={nanoid()}>
                    <Link to={`/category/stock/${titleToSlug(post.title)}`} className="md:max-w-[350px] newsreader-600 line-clamp-3">{post.title}</Link>
                  </div>
              ))
            }
        </div>
      </div>
    </section>
  );
};

export default Article;
