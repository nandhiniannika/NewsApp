import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({
  country = "in",
  pageSize = 5,
  category = "general",
  apiKey,
  setProgress
}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const updateNews = async () => {
    setProgress(10);
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
    let data = await fetch(url);
    setProgress(30);
    let parsedData = await data.json();
    setProgress(50);
    setArticles(parsedData.articles || []);
    setTotalResults(parsedData.totalResults || 0);
    setLoading(false);
    setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(category)} - News`;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${nextPage}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles || []));
    setTotalResults(parsedData.totalResults || 0);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px 0", marginTop: "90px" }}>
        News - Top {capitalizeFirstLetter(category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title || "No Title"}
                  description={element.description || "No Description"}
                  imgurl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author || "Unknown"}
                  date={element.publishedAt}
                  source={element.source?.name || "Unknown"}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string.isRequired,
  setProgress: PropTypes.func.isRequired,
};

export default News;
