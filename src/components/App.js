import React from "react";

// Import Data
import blogData from "../data/blog";

// Import Components
import Header from "./Header"
import About from "./About"
import ArticleList from "./ArticleList"

console.log(blogData);

function App() {
  return (
    <div className="App">
      {/* Header Component */}
      <Header 
      name={blogData.name}
      />
      {/* About Component */}
      <About
      image={blogData.image}
      about={blogData.about}
      />
      {/* Article List Component */}
      <ArticleList 
      posts={blogData.posts}
      />
    </div>
  );
}

export default App;
