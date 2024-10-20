import Image from "next/image";
import logo from "@/public/assets/logo.png";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import developer from "@/public/assets/image.png";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-20 bg-[#b88c8c] px-3 md:px-20 flex items-center justify-between ">
      <div className="flex items-center justify-between w-full h-full">
        <div className="flex items-center gap-5 md:gap-10">
       <Link href="/"> <Image src={logo} alt="logo" className="h-16 w-fit object-cover" /></Link>
          {/* <div className="relative cursor-pointer group">
            <IoHome size={32} />
            <p className="hidden group-hover:block bg-white absolute p-1 border border-gray-300 rounded-md -left-3 font-semibold text-black -bottom-10">
              Home
            </p>
          </div> */}
          <Link href="/about" className="cursor-pointer relative group">
            <FaPeopleGroup size={34} />
            <p className="hidden group-hover:flex bg-white absolute p-1 border border-gray-300 rounded-md -left-6 font-semibold text-black -bottom-8 w-20 items-center justify-center">
              About Us
            </p>
          </Link>
          <Link href="/developer" className="cursor-pointer relative group">
            <Image
              src={developer}
              alt="developer png"
              className="h-6 w-fit object-contain"
            />
            <p className="hidden group-hover:flex bg-white absolute p-1 border border-gray-300 rounded-md -left-6 font-semibold text-black -bottom-9 w-20 items-center justify-center">
              Developer
            </p>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-5 md:gap-10 text-xl">
          <MdLightMode size={32} />
          <Link href="/explore">
            <p className="font-semibold p-2 md:px-4 rounded-md md:rounded-md text-md bg-white text-gray-800 hover:bg-black hover:text-white transition-all duration-700">Explore</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
