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
      <h1 className="text-center text-4xl my-4">Search From Pexels Image Galary</h1>
      <SearchBar
        search={() => {
          setCurrentSearch(input);
        }}
        setInput={setInput}
        className=""
      />
      <div className="flex flex-wrap justify-center">
        {data &&
          data.map((d, index) => {
            return <Picture key={index} data={d} className="w-[15vw] object-cover m-4 max-w-md"/>;
          })}
      </div>
      <div className="text-center m-2">
        <button
          onClick={async () => {
            setPage(page + 1);
            let res = await morePicture(data, currentSearch, input, page);
            setData(res);
          }}
          className="p-2 border-2 rounded-md hover:bg-black hover:text-white"
        >
          <span>Load more</span>
        </button>
      </div>
      
      <Footer />
    </>
  );
};

export default Searchpage;
