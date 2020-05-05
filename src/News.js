import React, { useEffect, useState } from 'react';

// TODO move to server, add to ENV
const NEWS_URL =
  'http://localhost:3001/api/news';

const News = (props) => {
  const [news, setNews] = useState(null);
  useEffect(() => {
    fetch(NEWS_URL)
      .then(data => data.json())
      .then(data => setNews(data));
  }, [props.query]);

  if (!news) return null;
  return (
    <div className="news">
      <h2>News about {props.query}</h2>
      <ul>
        {news.map(extra =>
          <li key={extra.url}>
            <img src={extra.urlToImage} alt={extra.title} />
            <a href={extra.url}>
              {extra.title}
            </a>
          </li>
        )}
      </ul>
    </div>
  )
};

export default News;
