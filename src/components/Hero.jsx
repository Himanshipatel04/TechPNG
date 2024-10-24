import bg from "@/public/assets/bg.png";
// import bg2 from "@/public/assets/png.webp";

const Hero = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Reduced Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 "
        // style={{ backgroundImage: `url(${bg2.src})`, opacity: 0.1 }}
      />
      {/* Spinning Background Image - Animate only on mount */}
      <div
        className={`absolute inset-10 md:inset-28 bg-center bg-no-repeat bg-contain md:bg-contain duration-1000 rounded-full animate-ping`}
        style={{ backgroundImage: `url(${bg.src})` }}
      />
      {/* Text */}
      <p className="md:text-7xl  text-5xl text-center px-10 font-bold  relative z-20">
        Elevate Your Projects with Our{" "}
        <span className="md:bg-[#b88c8c] md:text-black">Tech PNG</span>{" "}
        Treasures!
      </p>
    </div>
  );
};

export default Hero;
