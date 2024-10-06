import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { titleToSlug, capitalize } from "../utils/slugFormat";
import { useDispatch, useSelector } from "react-redux";
import { formatDate, formatDateTime } from "../utils/dateFormat";
import NewsHeader from "../components/newsHeader";
import StarHeader from "../components/starHeader";
import { useMemo } from "react";
import fixImgUrl from "../utils/fixImgUrl";
import generateParagraphs from "../utils/generateParas";
import { nanoid } from "@reduxjs/toolkit";
import { fetchCurrentPageNews } from "../feature/news/newsSlice";
import Loading from "../components/loading";
import NothingFound from "../components/nothingFound";
import { animate, easeInOut, motion } from "framer-motion";

const Article = () => {
  let { articleTitle, category, query} = useParams();
  const searched = useSelector(state=>state.searched)
  if(query){
    category = "search"
  }
  const newsData = useSelector((state) => state.newsData[category]);
  let article = newsData.find((news) => titleToSlug(news.title) === articleTitle
  );

  const dispatch = useDispatch()

  const relatedPosts = useMemo(() => {
    if (!article || !newsData) {
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

  if(searched && !article){
    return <NothingFound text="The Article the you looking for does not exist"/>
  }

  return (
    <section className="article-section news-cycle-regular mt-10">
      <motion.div key={nanoid()} initial={{opacity:0}} transition={{duration: .75, ease: easeInOut}} animate={{opacity:1}} exit={{opacity:0}} className="my-container mx-auto px-4 pb-4">
        <NewsHeader text={`${capitalize(category)} News`} className="my-8" />
        <div className="grid grid-cols-12 lg:gap-8">
          <article className="col-span-full lg:col-span-8">
            <h1 className="~text-3xl/5xl mb-4 newsreader-700">{article.title}</h1>
            <div className="flex flex-col justify-start items-start text-xs text-gray-900 mb-6">
              <span>By <strong className="news-cycle-bold text-sm">{article.source_name ? article.source_name : "anonymous"}</strong></span>
              <span>{formatDateTime(article.pubDate)}</span>
            </div>
            <img 
              src={fixImgUrl(article.image_url)} 
              alt={article.title} 
              className="w-full aspect-video object-cover mb-6"
            />
          </article>

          <aside className="col-span-full lg:col-span-4 order-3 lg:order-2">
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
                    alt={"news image"} 
                    className="w-[100px] sm:w-[250px] lg:w-[100px] md:aspect-video object-cover"
                  />
                  <div>
                    <h2 className="~text-xl/2xl mb-2 line-clamp-4 newsreader-500 group-hover:text-primary transition-colors">
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
          <article className="col-span-12 order-2 lg:order-3">
        {
              generateParagraphs(article.content ? article.content : article.description).map(article=>(
                <p key={nanoid()} className="mb-6 text-gray-700 newsreader-400 ~text-lg/2xl leading-snug">{article}</p>
              ))
            }
            <div className={`${article.ai_tag? "block" : "hidden"} mb-8`}>
            <span>Tags : </span>{
              article.ai_tag && article.ai_tag.map(tag=><span className="inline-block mr-4 px-2 bg-black text-white" key={nanoid()}>{tag}</span>)
            }
            </div>
        </article>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-start pt-6 pb-14 group gap-5 md:gap-10 ~text-xl/3xl">
          <StarHeader title="Recent News" className="col-span-full"/>
            {
              newsData.slice(1,4).map((post)=>(
                  <div className={`flex items-center justify-center gap-6 w-fit`} key={nanoid()}>
                    <Link to={`/category/${category}/${titleToSlug(post.title)}`} className="md:max-w-[350px] newsreader-600 line-clamp-3">{post.title}</Link>
                  </div>
              ))
            }
        </div>
      </motion.div>
    </section>
  );
};

export default Article;
