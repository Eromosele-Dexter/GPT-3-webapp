import React from "react";
import "./blog.scss";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "../../assets";

const Blog = () => {
  const articleData = [
    {
      id: 2,
      image: blog02,
      date: "Sep 26, 2021",
      text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      id: 3,
      image: blog03,
      date: "Sep 26, 2021",
      text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      id: 4,
      image: blog04,
      date: "Sep 26, 2021",
      text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
    {
      id: 5,
      image: blog05,
      date: "Sep 26, 2021",
      text: "GPT-3 and Open  AI is the future. Let us exlore how it is?",
    },
  ];
  return (
    <section className="Blog">
      <div className="container">
        <div className="blog-heading">
          <h1 className="gradient__text">
            A lot is happening, <br /> We are blogging about it.
          </h1>
        </div>
        <div className="blog-container">
          <div className="blog-container_groupA">
            <Article
              imgUrl={blog01}
              date="Sep 26, 2021"
              text="GPT-3 and Open  AI is the future. Let us exlore how it is?"
            />
          </div>
          <div className="blog-container_groupB">
            {articleData.map((article) => {
              return (
                <Article
                  key={article.id}
                  imgUrl={article.image}
                  date={article.date}
                  text={article.text}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
