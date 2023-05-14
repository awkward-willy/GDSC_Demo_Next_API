import React from "react";

const SearchBar = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <input onChange={inputHandler} type="text" />
      <button onClick={search}>Search</button>
    </>
  );
};

export default SearchBar;
