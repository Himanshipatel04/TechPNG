import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#b88c8c] text-center py-2 font-semibold">
      <p className="text-white">
        All rights reserved &copy; TechPNG {new Date().getFullYear()}{" "}
      </p>
    </div>
  );
};

export default Footer;
