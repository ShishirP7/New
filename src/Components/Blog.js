import React from "react";
import BlogD from "../Datas/BlogData";
import { Routes, Route, Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
export default function Blog() {
  return (
    <div className="blogContainer">
      <h1>Our Latest Blogs</h1>
      <div className="blog-cardContainer">
        {BlogD.map((blogs) => {
          return (
            <div className="BlogCard">
              <div>
                <img className="blogposter" src={blogs.Poster} alt="img1" />
                <div class="hooverDate">{blogs.date}</div>
              </div>

              <div className="blog-card-Details">
                <h3>{blogs.Headline}</h3>
                <div className="blog-card-Details-1">
                  <img className="authorImg" alt="imtg" src={blogs.authorImg} />
                  <p>{blogs.author}</p>
                  <Link style={{ textDecoration: "none" }} to="/blogs">
                    <div className="readmore">
                      Read More <IoIosArrowForward />{" "}
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
