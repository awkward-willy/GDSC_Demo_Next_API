import Image from "next/image";

const Picture = ({ data }) => {
  return (
    <div className="m-2">
      
      <Image
          src={data.src.portrait}
          alt={data.url}
          height={data.height}
          width={data.width}
          priority={true}
          className="w-[15vw] object-cover m-4 max-w-md"
      />
      <div className="px-4 text-center">
        <p>{data.photographer}</p>
        <a target="_blank" href={data.src.portrait}>
          Open in new tab.
        </a>
      </div>
    </div>
  );
};

export default Picture;
