import Image from "next/image";

const Picture = ({ data }) => {
  return (
    <div className="">
      <p>{data.photographer}</p>
      <div className="w-[30vw]">
        <Image
          src={data.src.portrait}
          alt={data.url}
          height={data.height}
          width={data.width}
          priority={true}
        />
      </div>
      <p>
        Download Image:{" "}
        <a target="_blank" href={data.src.portrait}>
          Click Here
        </a>
      </p>
    </div>
  );
};

export default Picture;
