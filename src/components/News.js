import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = ({ country = "us", pageSize = 5, category, setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true);

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const fetchNews = async (pageNum = 1) => {
    setProgress(10);
    setLoading(true);

    const res = await fetch(
      `/api/news?country=${country}&category=${category}&page=${pageNum}&pageSize=${pageSize}`
    );

    const data = await res.json();
    setProgress(70);

    setArticles(data.articles || []);
    setTotalResults(data.totalResults || 0);
    setLoading(false);
    setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalize(category)} - News`;
    setPage(1);
    fetchNews(1);
  }, [category]);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    setPage(nextPage);

    const res = await fetch(
      `/api/news?country=${country}&category=${category}&page=${nextPage}&pageSize=${pageSize}`
    );
    const data = await res.json();

    setArticles(articles.concat(data.articles || []));
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "90px 0 30px" }}>
        Top {capitalize(category)} Headlines
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
            {articles.map((el) => (
              <div className="col-md-4" key={el.url}>
                <Newsitem
                  title={el.title}
                  description={el.description}
                  imgurl={el.urlToImage}
                  newsUrl={el.url}
                  author={el.author}
                  date={el.publishedAt}
                  source={el.source?.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default News;
