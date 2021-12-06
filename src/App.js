import React from 'react';
import './App.css';
import Article from "./Article"

const articles = [
  {
    title: "some title",
    content: "some content"
  },
  {
    title: "some title",
    content: "some content"
  },
  {
    title: "some title",
    content: "some content"
  },
  {
    title: "some title",
    content: "some content"
  },
]

function App() {
  return (
    <div className="App">
      {articles.map(article => (
        <Article 
          title={article.title} 
          content={article.content}/>
        ))}
    </div>
  );
}

export default App;
