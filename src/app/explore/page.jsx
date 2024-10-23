'use client'
import { useState } from "react";
import { FiSearch } from "react-icons/fi"; 

const page = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="px-5 md:px-20 py-10 bg-white dark:bg-black transition-colors duration-300">
    
      <div className="flex justify-center">
        <div className="relative w-[600px]">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[330px] h-14 md:w-[600px] px-5 py-2  text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-400"
            placeholder="Search here..."
          />
          <button
            className="absolute right-1 top-1 text-white bg-[#b88c8c] rounded p-2 hover:bg-[#9d7878] focus:outline-none flex items-center justify-center"
            style={{ height: "80%", width: "7%" }}
          >
            <FiSearch size={24}/>
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 mt-8 p-4 ">
        {/* Card 1 - Web Development */}
        <div className="bg-[#f1c6c6] shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="https://via.placeholder.com/300x150"
            alt="Web Development"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-700">Web Development</h3>
            <p className="mt-2 text-gray-600">
              Explore for web development...
            </p>
          </div>
        </div>

        {/* Card 2 - PNG Resources */}
        <div className="bg-[#f1c6c6] shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="https://via.placeholder.com/300x150"
            alt="PNG Resources"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-700">PNG for Python</h3>
            <p className="mt-2 text-gray-600">
              Download high-quality PNG images and icons...
            </p>
          </div>
        </div>

        {/* Card 3 - UI/UX Design */}
        <div className="bg-[#f1c6c6] shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="https://via.placeholder.com/300x150"
            alt="UI/UX Design"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-700">UI/UX Design</h3>
            <p className="mt-2 text-gray-600">
              For UI/UX design...
            </p>
          </div>
        </div>

        {/* Card 4 - JavaScript Libraries */}
        <div className="bg-[#f1c6c6] shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="https://via.placeholder.com/300x150"
            alt="JavaScript Libraries"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-700">JavaScript Related</h3>
            <p className="mt-2 text-gray-600">
              JavaScript libraries and frameworks...
            </p>
          </div>
        </div>

        {/* Card 5 - View All */}
        <div className="bg-[#f1c6c6] shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src="https://via.placeholder.com/300x150"
            alt="View All"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-700">View All PNGs</h3>
            <p className="mt-2 text-gray-600">
              See all availables...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

