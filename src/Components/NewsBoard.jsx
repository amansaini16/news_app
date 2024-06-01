import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';

const NewsBoard = ({ category, searchQuery }) => {
  const [state, setState] = useState([]);
  const [hasError, setHasError] = useState(false);

  const fetchData = () => {
    let url;
    if (searchQuery) {
      url = `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=2fe95fcde45746dcb281c234d6068bd0`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=2fe95fcde45746dcb281c234d6068bd0`;
    }

    fetch(url)
      .then(response => response.json())
      .then(res => {
        setState(res.articles);
        console.log(res);
      })
      .catch(err => setHasError(true));
  };

  useEffect(() => {
    fetchData();
  }, [category, searchQuery]);

  return (
    <>
      <h2 className="d-flex justify-content-center p-4">Latest <span className="badge text-bg-success"> news</span></h2>
      {state && state.map((news, index) => (
        <NewsItem
          key={index}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </>
  );
};

export default NewsBoard;
