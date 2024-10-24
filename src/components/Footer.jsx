import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#b88c8c] dark:bg-[#b88c8c] text-center py-2 font-semibold">
      <p className="text-white">
        All rights reserved &copy; TechPNG {new Date().getFullYear()}{" "}|{" "}  
         <Link href="/contribute" className="text-black hover:text-blue-700 font-bold">Contribute</Link>
      </p>
    </div>
  );
};

export default Footer;
