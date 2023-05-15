import React from "react";

const SearchBar = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <div className="text-center m-4">
        <input onChange={inputHandler} type="text" className="p-2 border-2 rounded-md focus:border-black focus:scale-105"/>
        <button onClick={search} className="ml-4 p-2 border-2 rounded-md hover:bg-black hover:text-white"><span>Search</span></button>
      </div>
      
    </>
  );
};

export default SearchBar;
