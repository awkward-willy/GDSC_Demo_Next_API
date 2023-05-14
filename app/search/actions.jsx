"use server";
const auth = process.env.KEY;
export const search = async (url) => {
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  });
  const parseData = await dataFetch.json();
  return parseData.photos;
};

export const morePicture = async (data, currentSearch, input, page) => {
  let newURL = "";
  if (currentSearch === "") {
    newURL = `https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
  } else {
    newURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=${page}`;
  }
  const dataFetch = await fetch(newURL, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  });
  const parseData = await dataFetch.json();
  return data.concat(parseData.photos);
};
