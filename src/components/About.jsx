import { assets } from "../assets/assets";
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="container flex flex-col items-center justify-center mx-auto p-14 md:20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About
        <span className="underline underline-offset-4 decoration-1 font-light">
          {" "}
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties,Dedicated to your Vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-20">
        <img
          src={assets.brand_img}
          alt="brand image"
          className="w-full sm:w-1/2 max-w-lg "
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div className="">
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Delivered</p>
            </div>
            <div className="">
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>On going Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            This is it, the moment you’ve been waiting for! Juja Prime Phase 10
            has officially launched, marking the final chapter of one of the
            most sought after land projects in Kenya. If you’ve been watching
            from the sidelines, now is the time to act because once it’s gone,
            it’s gone for good!
          </p>
          <button className="bg-blue-600 text-white w-40 rounded px-8 py-2 font-semibold">
            Learn more
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
