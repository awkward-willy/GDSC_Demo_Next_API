"use client";
import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import Picture from "../components/Picture";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { search, morePicture } from "./actions";

const Searchpage = () => {
  const [input, setInput] = useState("");
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  let [currentSearch, setCurrentSearch] = useState("");
  const initialURL = "https://api.pexels.com/v1/curated?page=1&per_page=15";
  const searchURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=1`;

  useEffect(() => {
    async function fetchData() {
      const data = await search(initialURL);
      setPage(2);
      setData(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (currentSearch === "") {
        const data = await search(initialURL);
        setPage(2);
        setData(data);
        return;
      }
      const data = await search(searchURL);
      setPage(2);
      setData(data);
    }
    fetchData();
  }, [currentSearch]);

  return (
    <>
      <Navbar />
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

      <button
        onClick={async () => {
          setPage(page + 1);
          let res = await morePicture(data, currentSearch, input, page);
          setData(res);
        }}
      >
        Load more
      </button>
      <Footer />
    </>
  );
};

export default Searchpage;
