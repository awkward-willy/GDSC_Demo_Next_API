"use client";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Image from "next/image";

export default function HomePage({ data }) {
  return (
    <>
      <Navbar />
      <h1 className="text-center text-4xl my-4">Pexels Image Galary</h1>
      <div className="flex flex-wrap justify-center">
        {data &&
          data.map((d, index) => {
            return <Image key={index} data={d} src={d.src.portrait} alt={d.url} height={d.height} width={d.width} className="sepia-[50%] w-[20vw] object-cover m-4 max-w-md hover:sepia-0"/>;
          })}
      </div>
      <Footer />
    </>
  );
}
