"use client";
import Footer from "./components/Footer";
import Picture from "./components/Picture";
import Navbar from "./components/Navbar";

export default function HomePage({ data }) {
  return (
    <>
      <Navbar />
      <h1>Image Searching.</h1>
      <div className="flex flex-wrap">
        {data &&
          data.map((d, index) => {
            return <Picture key={index} data={d} />;
          })}
      </div>
      <Footer />
    </>
  );
}
