import bg from "@/public/assets/bg2.png";
import bg2 from "@/public/assets/png.webp";

const Hero = () => {
  return (
    <div className="h-[90vh] flex items-center justify-center relative overflow-hidden">
      {/* Background Image with Reduced Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bg2.src})`, opacity: 0.1 }} // Adjust opacity as needed
      />
      {/* Spinning Background Image */}
      <div
        className="absolute inset-10 md:inset-36 bg-center bg-no-repeat bg-contain md:bg-contain duration-1000 animate-spin z-10"
        style={{ backgroundImage: `url(${bg.src})` }}
      />
      {/* Text */}
      <p className="md:text-7xl text-6xl text-center px-10 font-bold text-black relative z-20">
        Elevate Your Projects with Our{" "}
        <span className="md:bg-[#b88c8c]">Tech PNG</span> Treasures!
      </p>
    </div>
  );
};

export default Hero;
