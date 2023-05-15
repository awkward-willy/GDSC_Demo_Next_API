import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-[12vh] flex justify-center items-center bg-gray-300">
      <Link
        href="/"
        className="m-4 transition duration-500 hover:underline underline-offset-4"
      >
        Home
      </Link>
      <Link
        href="/search"
        className="m-4 transition duration-500 hover:underline underline-offset-4"
      >
        Search
      </Link>
    </div>
  );
};

export default Navbar;
