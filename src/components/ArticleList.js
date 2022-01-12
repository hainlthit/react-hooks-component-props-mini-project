import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
    const articleArray = posts.map((post) => {
      return (
        <Article
          key={post.id}
          title={post.title}
          date={post.date}
        />
      );
    });
    return <main>{articleArray}</main>;
  }
  
  export default ArticleList;