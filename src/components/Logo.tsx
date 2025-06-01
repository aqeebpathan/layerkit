import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-3xl font-bold">
      <span className="-mt-0.5 text-[34px] text-lime-400 md:ml-0.5">L</span>
      <span className="text-lime-400">ayer</span>Kit
    </Link>
  );
};

export default Logo;
