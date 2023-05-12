"use client";
import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Picture from "../components/Picture";

const Homepage = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const auth = "";
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;
  const search = async (url) => {
    setPage(2);
    const dataFetch = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    const parseData = await dataFetch.json();
    setData(parseData.photos);
  };

  const morePicture = async () => {
    let newURL = "";
    if (currentSearch === "") {
      newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
    } else {
      newURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=${page}`;
    }
    setPage(page + 1);
    const dataFetch = await fetch(newURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: auth,
      },
    });
    const parseData = await dataFetch.json();
    setData(data.concat(parseData.photos));
  };

  useEffect(() => {
    search(initialURL);
  }, []);

  useEffect(() => {
    if (currentSearch === "") {
      search(initialURL);
      return;
    }
    search(searchURL);
  }, [currentSearch]);

  return (
    <div style={{ minHeight: "100vh" }}>
      <SearchBar
        search={() => {
          setCurrentSearch(input);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d, index) => {
            return <Picture key={index} data={d} />;
          })}
      </div>

      <div className="morePicture">
        <button onClick={morePicture}>Load more</button>
      </div>
    </div>
  );
};

export default Homepage;
