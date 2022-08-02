import React from "react";
import "./article.scss";

const Article = ({ imgUrl, date, text }) => (
  <div className="Article">
    <div className="article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="article-content">
      <div className="topic">
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p className="read-more">Read Full Article</p>
    </div>
  </div>
);

export default Article;
