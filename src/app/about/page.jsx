import React from "react";
import logo from "@/public/assets/Untitled design.png";
import Image from "next/image";

const Page = () => {
  return (
    <div className="min-h-screen  py-16 px-5 md:px-20  text-black">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              About <span className="text-[#b88c8c]">TechPNG</span>
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-gray-600">
              Your One-Stop Destination for All Technical Stack PNGs!
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              Welcome to PNG Hub, the ultimate resource for developers, designers, and tech enthusiasts looking for high-quality PNG images of your favorite tech stacks. From programming languages to cloud technologies, frameworks, and developer tools, we provide transparent PNG images of the most widely used technologies, making it easier to enhance your projects with the right visual assets.
            </p>
          </div>

          {/* Why PNG Hub Section */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-gray-800">Why Us?</h2>
            <div className="flex flex-col gap-4">
              <p className="text-lg md:text-xl text-gray-700">
                <span className="font-bold text-[#b88c8c]">Tech-Focused Collection:</span> Our library is entirely dedicated to PNGs of programming languages, frameworks, libraries, and other tools. Whether you're building websites, apps, or cloud-native solutions, we have the images to represent your stack.
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                <span className="font-bold text-[#b88c8c]">High-Resolution Images:</span> All our PNGs come with transparent backgrounds, making them ideal for presentations, website designs, documentation, and more.
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                <span className="font-bold text-[#b88c8c]">Wide Range of Tools:</span> From HTML, CSS, JavaScript, and Python to modern tools like Kubernetes, Docker, React, and AWS, you&apos;ll find PNGs for all the core technologies in one place.
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                <span className="font-bold text-[#b88c8c]">Simple and Free:</span> PNG Hub is free to use, and we offer seamless downloading without the hassle of watermarks or attribution requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section: Logo */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Image src={logo} alt="TechPNG Logo" className="w-[100%] object-contain" />
        </div>
      </div>
    </div>
  );
};

export default Page;
