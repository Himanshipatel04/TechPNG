"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

import png from "@/public/assets/pngegg.png"; // Default image
import data from "@/components/data.json"; // Your JSON data

const Page = () => {
  const [search, setSearch] = useState("");
  const [theme,setTheme] = useState("dark")

  const handleDownload = (imageSrc, techName) => {
    const link = document.createElement("a");
    link.href = imageSrc;
    link.download = `${techName}.png`; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(()=>{
    const thm = localStorage.getItem("theme")
    setTheme(thm)
  })


  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="px-5 md:px-20 py-10 min-h-screen transition-colors duration-300">
      <div className="flex justify-center">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 px-5 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            placeholder="Search here..."
          />
          <button className="absolute right-2 top-1 w-[10%] h-[80%] text-white bg-[#b88c8c] rounded p-2 hover:bg-[#9d7878] focus:outline-none flex items-center justify-center">
            <FiSearch size={24} />
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-16 mt-8 p-2">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="outline outline-1 relative bg-gray-500 outline-pink-200 text-black dark:bg-gray-600 dark:text-white h-56 w-full md:w-72 rounded-md p-2 transition duration-300"
            >
              <div className="flex flex-col items-center justify-center gap-2">
                <Image
                  src={png} // Replace with item.imageSrc if using unique images
                  alt={`${item.name} logo`}
                  className="h-20 w-20 object-contain rounded-full"
                />
                <p className="text-xl font-semibold text-center">{item.name}</p>
                <p className="text-md text-center px-2 text-wrap">{item.description}</p>
                <button
                  onClick={() => handleDownload(png.src, item.name)} // Use the correct image source
                  className={`${
                    theme === "dark" ? "bg-black" : "bg-[#9d7878]"
                  } absolute bottom-0 text-lg rounded-b-lg w-full text-white py-2 mt-2 hover:bg-gray-700`}
                >
                  Download
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-300 mt-4">
            No results found.
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;
