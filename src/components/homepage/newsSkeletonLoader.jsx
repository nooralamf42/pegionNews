import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchBusinessNews,
  fetchCryptoNews,
  fetchFinanceNews,
  fetchMutualFundNews,
  fetchPoliticsNews,
  fetchSportsNews,
  fetchStockNews,
  fetchTechNews,
  fetchWealthNews,
  fetchWorldNews,
} from "../../feature/news/newsSlice";
const NewsSkeletonLoader = ({ name }) => {
  const status = useSelector(state=>state.status)
  const dispatch = useDispatch();
  const fetchData = () => {
    if(status=='loading') return
    switch (name) {
      case "business":
        dispatch(fetchBusinessNews());
        break;

        case "stock":
          dispatch(fetchStockNews());
          break;

      case "world":
        dispatch(fetchWorldNews());
        break;

      case "crypto":
        dispatch(fetchCryptoNews());
        break;

      case "finance":
        dispatch(fetchFinanceNews());
        break;

      case "mutual_fund":
        dispatch(fetchMutualFundNews());
        break;
      case "politics":
        dispatch(fetchPoliticsNews());
        break;
      case "sports":
        dispatch(fetchSportsNews());
        break;
      case "tech":
        dispatch(fetchTechNews());
        break;
      case "wealth":
        dispatch(fetchWealthNews());
        break;

      default:
        break;
    }
  };

  const renderSkeletonItem = () => (
    <div className="animate-pulse space-y-2">
      <div className="h-4 bg-gray-300 rounded w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
    </div>
  );
  return (
    <motion.section
      whileInView={fetchData}
      viewport={{ once: true }}
      className="hero-section news-cycle-regular mt-5"
    >
       <div className="my-container mx-auto px-4 pb-4">
        <div className="grid grid-cols-12 gap-8">
          {/* Main news item */}
          <div className="col-span-full md:col-span-6 lg:col-span-8 mb-4">
            <div className="w-full aspect-video bg-gray-300 animate-pulse rounded"></div>
            <div className="ml-10 relative z-20 bg-white shadow-md p-4 -mt-10">
              {renderSkeletonItem()}
            </div>
          </div>

          {/* Side news items */}
          <div className="col-span-full md:col-span-6 lg:col-span-4 mt-4 space-y-4 group">
            <div className="flex gap-4 items-center">
              <div className="h-8 bg-red-600 w-1/3 animate-pulse rounded"></div>
            </div>

            {[1, 2].map((item) => (
              <div key={item} className="gap-1 items-center grid grid-cols-5 border-b py-3">
                <div className="col-span-full md:col-span-4">
                  {renderSkeletonItem()}
                </div>
                <div className="w-full border aspect-video col-span-full md:col-span-1 md:aspect-[9/12] bg-gray-300 animate-pulse rounded"></div>
              </div>
            ))}

            {[1, 2, 3].map((item) => (
              <div key={item} className="pl-4 border-b py-1">
                {renderSkeletonItem()}
              </div>
            ))}
          </div>
        </div>

        {/* Trending news section */}
        <div className="border-y grid grid-cols-1 md:grid-cols-3 justify-between items-start space-y-4 md:space-y-6 py-6 px-10 md:px-0 group md:gap-10">
          <div className="h-8 bg-gray-300 w-1/3 col-span-full animate-pulse rounded"></div>
          {[1, 2, 3].map((item) => (
            <div key={item} className="flex items-center justify-center gap-6 w-fit">
              <div className="h-4 bg-gray-300 w-full md:max-w-[350px] animate-pulse rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default NewsSkeletonLoader;
