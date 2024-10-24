"use client";
import { useState, useEffect } from "react";
import { FiLoader } from "react-icons/fi";
import Image from "next/image";
import logo from "@/public/assets/logo.png";

const Page = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
    isContributed: true,
    contributedBy: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    setIsSubmitting(true);
    e.preventDefault();
    try {
      const response = await fetch("/api/check", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Image saved successfully!");
      } else {
        const errorData = await response.json();
        alert(`Failed to save image: ${errorData?.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error saving image.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Toggle between light and dark modes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQuery.matches);
    mediaQuery.addEventListener("change", (e) => setIsDarkMode(e.matches));

    return () => mediaQuery.removeEventListener("change", (e) => setIsDarkMode(e.matches));
  }, []);

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? "bg-black text-white" : "bg-gray-100 text-black"}`}>
      <form
        className={`w-full max-w-md p-6 rounded-lg shadow-lg ${isDarkMode ? "bg-gray-800" : "bg-white"}`}
        onSubmit={handleSubmit}
      >
        {/* Logo */}
        <div className="flex justify-center w-full bg-[#b98c8c] mb-6 object-contain rounded-md">
          <Image src={logo} alt="Logo" className="" />
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-center">Upload Image</h2>

        {/* Title */}
        <label className="block mb-4">
          <span className="text-pink-300">Title</span>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter the title"
            className={`mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none ${
              isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-100 border-gray-300"
            }`}
            required
          />
        </label>

        {/* Description */}
        <label className="block mb-4">
          <span className="text-pink-300">Description</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter a brief description"
            className={`resize-none mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none ${
              isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-100 border-gray-300"
            }`}
            required
          />
        </label>

        {/* URL */}
        <label className="block mb-4">
          <span className="text-pink-300">Image URL</span>
          <input
            type="file"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="Enter the image URL"
            className={`mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none ${
              isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-100 border-gray-300"
            }`}
            required
          />
        </label>

        {/* Contributed By */}
        {formData.isContributed && (
          <label className="block mb-4">
            <span className="text-pink-300">Contributed By</span>
            <input
              type="text"
              name="contributedBy"
              value={formData.contributedBy}
              onChange={handleChange}
              placeholder="Enter contributor's name"
              className={`mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none ${
                isDarkMode ? "bg-gray-700 border-gray-600 text-white" : "bg-gray-100 border-gray-300"
              }`}
              required
            />
          </label>
        )}

        {/* Submit Button or Loader */}
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <FiLoader className="text-3xl animate-spin text-pink-500" />
          </div>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#b98c8c] text-white py-2 rounded-lg hover:bg-white hover:text-black"
          >
            Submit
          </button>
        )}
      </form>
    </div>
  );
};

export default Page;
