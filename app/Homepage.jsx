"use client";
import Picture from "./components/Picture";

export default function HomePage({ data }) {
  return (
    <div>
      <p>test</p>
      <div>
        {data &&
          data.map((d, index) => {
            return <Picture key={index} data={d} />;
          })}
      </div>
    </div>
  );
}
