import React from "react";
import me2 from "@/public/assets/me2.jpg";
import me from "@/public/assets/me.jpg";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons

const page = () => {
  return (
    <div className="h-fit py-10 px-5 md:px-20 w-full text-black bg-gray-100 dark:text-white dark:bg-black  min-h-[80vh] ">
      <h1 className="text-6xl font-bold text-center text-[#121010] dark:text-gray-400">
        Meet the Developer
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center my-7 gap-20 ">
        <div className="flex flex-col items-center ">
          <div className="border-4 border-[#b88c8c] p-3 rounded-xl overflow-hidden ">
            <Image
              src={me}
              alt="Himanshi Patel"
              className="object-cover rounded-xl w-[350px] h-[530px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full max-w-2xl">
          <p className="text-3xl font-bold ">
            Hello, I&apos;m{" "}
            <span className="font-extrabold text-5xl text-[#b88c8c]">
              Himanshi Patel !
            </span>
          </p>
          <p className="text-xl font-serif mb-5 ">
            I am a student of 3rd year and a web developer with a focus on
            creating innovative and user-friendly applications. With expertise
            in technologies like React, Next.js, and Tailwind CSS, I strive to
            build seamless experiences for users.
          </p>

          <h2 className="text-4xl font-bold">About TechPNG</h2>
          <p className="text-xl font-serif mb-5">
            As the creator of TechPNG, I aim to provide developers, designers,
            and tech enthusiasts with high-quality PNG images of the most widely
            used technical stacks. My goal is to simplify the process of finding
            and using these assets in projects, making it easier for others to
            create stunning applications.
          </p>

          <h2 className="text-4xl font-bold ">Connect with Me</h2>
          <p className="text-xl font-serif">
            I&apos;m always open to collaboration, feedback, and new ideas. Feel
            free to reach out via the links below:
          </p>
          <div className="flex gap-6 text-[#b88c8c] text-4xl">
            <a
              href="https://github.com/Himanshipatel04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline"
            >
              <FaGithub className="mr-2" />
            </a>
            <a
              href="https://www.linkedin.com/in/himi04"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:underline"
            >
              <FaLinkedin className="mr-2" />
            </a>
            <a
              href="mailto:himanship871@gmail.com"
              className="flex items-center hover:underline"
            >
              <FaEnvelope className="mr-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
