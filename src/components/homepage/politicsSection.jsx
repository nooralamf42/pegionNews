import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { titleToSlug } from "../../utils/slugFormat";
import StarHeader from "../starHeader";
import fixImgUrl from "../../utils/fixImgUrl";
import { nanoid } from "@reduxjs/toolkit";
import NewsHeader from "../newsHeader";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const PoliticsSection = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const politicsNews = useSelector((state) =>
    state.newsData.politics.slice(0, 8)
  );
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === politicsNews.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < politicsNews.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <section className="my-container py-8">
            <Link to={'/category/politics'}><NewsHeader text={"Politics"}/></Link>
      <div className="relative overflow-hidden py-8">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${imgIndex * 100}%`,
          }}
          transition={SPRING_OPTIONS}
          onDragEnd={onDragEnd}
          className="flex cursor-grab items-center active:cursor-grabbing"
        >
          <Images imgIndex={imgIndex} news={politicsNews} />
        </motion.div>

        <Dots
          imgIndex={imgIndex}
          news={politicsNews}
          setImgIndex={setImgIndex}
        />
      </div>
      <div className="border-y grid grid-cols-1 md:grid-cols-3 justify-between items-center space-y-4 md:space-y-6 py-6 px-10 md:px-0 group">
          <StarHeader title="More News" className="col-span-full"/>
            {
              politicsNews.slice(3,6).map((post)=>(
                  <div className={`flex items-center justify-center gap-6 w-fit`} key={nanoid()}>
                    <img src={fixImgUrl(post.image_url)} alt={post.title} className="w-full aspect-square object-cover max-w-[100px] "/>
                    <Link to={`/category/politics/${titleToSlug(post.title)}`} className="md:max-w-[220px] newsreader-600 line-clamp-3">{post.title}</Link>
                  </div>
              ))
            }
        </div>
    </section>
  );
};

const Images = ({ imgIndex, news }) => {
  return (
    <>
      {news.map(({ image_url, title, description, source_name }, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${image_url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full shrink-0 object-cover relative"
          >
            <div className="ml-10 absolute bottom-0 z-20 backdrop-blur-xl  bg-white/80 shadow-xl p-4 -mt-10">
              <Link to={`/category/politics/${titleToSlug(title)}`}>
                <h1 className="~text-xl/5xl font-bold newsreader-700 line-clamp-2">
                  {title}
                </h1>
              </Link>
              {/* <p className="text-gray-700 line-clamp-2 newsreader-500">{description}</p> */}
              <div className="text-sm text-gray-500">
                By{" "}
                <span className="font-semibold">
                  {source_name ? source_name : "anonymous"}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex, news }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {news.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-3 w-3 rounded-full transition-colors ${
              idx === imgIndex ? "bg-primary" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};
