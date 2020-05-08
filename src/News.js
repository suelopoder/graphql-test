import React, { useEffect, useState } from 'react';

const NEWS_URL = '/api/news';

const News = (props) => {
  const [news, setNews] = useState(null);
  useEffect(() => {
    fetch(NEWS_URL)
      .then(data => data.json())
      .then(data => setNews(data));
  }, [props.query]);

  if (!news || !news.length) return null;
  return (
    <section className="news">
      <h2>Some news about {props.query}</h2>
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
    </section>
  )
};

export default News;
