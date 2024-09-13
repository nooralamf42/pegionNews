import { nanoid } from "@reduxjs/toolkit";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { titleToSlug } from "../../utils/slugFormat";

function BusinessSection() {
  const {newsData, error, loading} = useSelector(state=>state) 

  return (
    <section className="editor-choice-one-area mt-60 mb-60">
      <div className="container">
        <div className="row">
          {/* Today's Pick Section */}
          <div className="col-lg-4">
            <div className="section-title">
              <h1>Business</h1>
            </div>
            <div className="post-block-template-three-wrapper">
              {newsData.business.slice(4,9).map((post, index) => (
                <article
                  key={nanoid()}
                  className="post-block-style-wrapper post-block-template-three"
                >
                  <div className="post-block-style-inner post-block-list-style-inner-three">
                    <div className="post-block-number-wrap">
                      <span className="post-number-counter">{index + 1}</span>
                    </div>
                    <div className="post-block-content-wrap">
                      <div className="post-item-title">
                        <h2 className="post-title">
                          <Link to={`/category/business/${titleToSlug(post.title)}`}>{post.title}</Link>
                        </h2>
                      </div>
                      <div className="post-bottom-meta-list">
                        <div className="post-meta-author-box">
                          By <a href="javascript:void(0)">{post.author ? post.author : 'anonymous'}</a>
                        </div>
                        <div className="post-meta-date-box">{post.date}</div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Most Recent Section */}
          <div className="col-lg-8 most-recent-col-custom">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title">
                  <h2 className="title-block">Most Recent</h2>
                </div>
              </div>
            </div>
            <div className="row">
              {newsData.business.slice(0,4).map((post) => (
                <div key={nanoid()} className="col-lg-6">
                  <article className="post-block-style-wrapper post-block-template-one post-block-template-medium">
                    <div className="post-block-style-inner">
                      <div className="post-block-media-wrap">
                        <Link to={`/category/business/${titleToSlug(post.title)}`}>
                          <img src={post.urlToImage} alt={post.title} />
                        </Link>
                      </div>
                      <div className="post-block-content-wrap">
                        <div className="post-item-title">
                          <h2 className="post-title">
                            <Link to={`/category/business/${titleToSlug(post.title)}`}>{post.title}</Link>
                          </h2>
                        </div>
                        <div className="post-excerpt-box">
                          <p>{post.description}</p>
                        </div>
                        <div className="post-bottom-meta-list">
                          <div className="post-meta-author-box">
                            By <a href="javascript:void(0)">{post.author ? post.author : 'anonymous'}</a>
                          </div>
                          <div className="post-meta-date-box">{post.date}</div>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BusinessSection;
