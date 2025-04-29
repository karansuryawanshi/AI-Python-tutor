import React from "react";

import ML_logo from "../assets/AI_logo.png";
import AI_logo from "../assets/statistic.png";
import machineLearning from "../assets/machine_learning.png";
import DataScience from "../assets/Data_science.png";
import AI_image from "../assets/AI_image.jpg";

import Python from "../assets/python.svg";
import Typewrite from "../components/Typewrite";
import Brain_logo from "../assets/brain_icon.png";

import { motion } from "framer-motion";

const AI_benifits = () => {
  const isMedium = typeof window !== "undefined" && window.innerWidth <= 768;
  console.log("[isMedium]", isMedium);

  return (
    <div className=" text-white pt-10">
      <div className="flex items-center justify-center">
        <motion.div
          whileInView={{
            // x: [-100, 0],
            x: isMedium ? [-300, 0] : [-500, 0],
            opacity: [0, 1],
          }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
          className="w-full lg:w-1/2  flex items-end justify-center"
        >
          <div className="w-3/4 backdrop-blur-lg z-50 border-2 bg-neutral-600/10 rounded-lg border-white flex flex-col items-center gap-4 px-4 py-2">
            <div className="w-16 h-16 text-white">
              <img src={Python} alt="" />
            </div>
            <h3 className="text-xl">Python Mastery</h3>
            <p className="text-justify text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ea
              esse quisquam ad debitis aut illum assumenda nulla obcaecati
              doloribus, nesciunt perspiciatis corrupti laborum odit, suscipit
              ullam laudantium consectetur amet?
            </p>
          </div>
        </motion.div>

        <div className="w-1/2 hidden lg:block">
          <Typewrite />
        </div>
      </div>
      {/* --------------------------------------------------------------------- */}
      <div className="flex items-center justify-center my-24">
        <motion.div
          whileInView={{
            x: [-500, 0],
            opacity: [0, 1],
          }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
          className="w-1/2 hidden lg:block"
        >
          <div className="flex items-center justify-center">
            <img src={machineLearning} alt="" width={"600px"} />
          </div>
        </motion.div>
        <motion.div
          whileInView={{
            // x: [500, 0],
            x: isMedium ? [100, 0] : [500, 0],
            opacity: [0, 1],
          }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
          className="flex items-end justify-center w-full lg:w-1/2 "
        >
          <div className=" w-3/4 border-2 bg-neutral-600/10 rounded-lg border-white flex flex-col items-center gap-4 px-4 py-2 backdrop-blur-lg z-50">
            <div className="w-16 h-16 text-white z-50 backdrop-blur-lg">
              <img src={Brain_logo} alt="" className="z-50 backdrop-blur-lg" />
            </div>
            <h3 className="text-xl">Machine Learning</h3>
            <p className="text-justify text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ea
              esse quisquam ad debitis aut illum assumenda nulla obcaecati
              doloribus, nesciunt perspiciatis corrupti laborum odit, suscipit
              ullam laudantium consectetur amet?
            </p>
          </div>
        </motion.div>
      </div>
      {/* ===================================================================== */}
      <div className="flex items-center justify-center my-24">
        <motion.div
          whileInView={{
            // x: [-500, 0],
            x: isMedium ? [-300, 0] : [-500, 0],
            opacity: [0, 1],
          }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
          className="flex items-end justify-center w-full lg:w-1/2"
        >
          <div className=" w-3/4 border-2 bg-neutral-600/10 rounded-lg border-white flex flex-col items-center gap-4 px-4 py-2 z-50 backdrop-blur-lg">
            <div className="w-16 h-16 text-white">
              <img src={AI_logo} alt="" />
            </div>
            <h3 className="text-xl">Data Science</h3>
            <p className="text-justify text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ea
              esse quisquam ad debitis aut illum assumenda nulla obcaecati
              doloribus, nesciunt perspiciatis corrupti laborum odit, suscipit
              ullam laudantium consectetur amet?
            </p>
          </div>
        </motion.div>

        <motion.div
          whileInView={{
            x: [500, 0],
            opacity: [0, 1],
          }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
          className="w-1/2 hidden lg:block"
        >
          <div className="flex items-center justify-center">
            <img src={DataScience} alt="" width={"500px"} />
          </div>
        </motion.div>
      </div>
      {/* ======================================================================== */}
      <div className="flex items-center justify-center z-50">
        <motion.div
          whileInView={{
            x: [-500, 0],
            opacity: [0, 1],
          }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
          className="w-1/2 hidden lg:block"
        >
          <div className="flex items-center justify-center">
            <img src={AI_image} alt="" width={"500px"} />
          </div>
        </motion.div>
        <motion.div
          whileInView={{
            // x: [500, 0],
            x: isMedium ? [300, 0] : [500, 0],
            opacity: [0, 1],
          }}
          transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
          className="flex items-end justify-center w-full lg:w-1/2"
        >
          <div className=" w-3/4 border-2 bg-neutral-600/10 rounded-lg border-white flex flex-col items-center gap-4 px-4 py-2 z-50 backdrop-blur-lg">
            <div className="w-16 h-16 text-white">
              <img src={ML_logo} alt="" />
            </div>
            <h3 className="text-xl">Artificial Intelligence</h3>
            <p className="text-justify text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ea
              esse quisquam ad debitis aut illum assumenda nulla obcaecati
              doloribus, nesciunt perspiciatis corrupti laborum odit, suscipit
              ullam laudantium consectetur amet?
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AI_benifits;
