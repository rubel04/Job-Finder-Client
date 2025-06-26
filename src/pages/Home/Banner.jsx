import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import { motion } from "motion/react";
const Banner = () => {
  return (
    <div  className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 6, repeat: Infinity }}
            src={banner1}
            className="md:max-w-sm"
          />
          <motion.img
            animate={{ x: [150, 200, 150] }}
            transition={{ duration: 8, repeat: Infinity }}
            src={banner2}
            className="md:max-w-sm"
          />
        </div>
        <motion.div
          animate={{ y: [0, -60], opacity: [0,0.1,0.1,0.2,0.2,0.5,0.8,1]}}
          transition={{ duration: 1 }}
          className="flex-1"
        >
          <h1 className="text-5xl font-bold">
            The{" "}
            <span className="text-blue-500 shadow-[0_2px_2px_-2px_rgba(0,0,0,0.1)] shadow-blue-300">
              Easiest Way
            </span>{" "}
            <br />
            to Get Your New Job
          </h1>
          <p className="py-6 w-2/3 text-gray-500">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 applications every single day
          </p>
          <button className="text-sm bg-blue-500 py-2.5 px-6 rounded cursor-pointer font-medium hover:bg-[#05264e] text-white my-2 transition duration-300 hover:-translate-y-0.5">Explore</button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
