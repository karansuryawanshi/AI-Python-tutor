import React from "react";

import codeImage from "../assets/code.png";
import openBook from "../assets/open-book.png";
import brain from "../assets/brain.png";
import book from "../assets/book.png";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <div className="card1 flex sticky top-[16rem] w-screen h-auto items-end mt-[16rem] justify-end backdrop-blur-sm">
        <div className="w-2/4 flex items-center justify-center">
          <motion.div
            whileInView={{
              x: [500, 0],
              opacity: [0, 1],
            }}
            transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
            className="w-3/4 bg-neutral-500/20 border rounded-md p-4 "
          >
            <p className="flex text-3xl gap-3 items-center justify-center">
              <span>
                <img className="w-12" src={codeImage} alt="" />
              </span>
              <span className="">Interactive Coding</span>
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              tenetur nisi dicta quia doloribus nobis porro voluptatum aliquam
              nostrum esse suscipit similique, perspiciatis minus. Aut ipsam
              blanditiis perspiciatis assumenda magni?
            </p>
          </motion.div>
        </div>
      </div>
      {/* ------------------------------ */}
      <motion.div
        whileInView={{
          x: [500, 0],
          opacity: [0, 1],
        }}
        transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
        className="card2 flex sticky top-[17rem] w-screen h-auto items-end justify-end backdrop-blur-lg"
      >
        <div className="w-2/4 flex items-center justify-center">
          <div className="w-3/4 bg-green-500/20 border rounded-md p-4 ">
            <p className="flex text-3xl gap-3 items-center justify-center">
              <span>
                <img className="w-12" src={openBook} alt="" />
              </span>
              <span className="">Personalized Learning</span>
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              tenetur nisi dicta quia doloribus nobis porro voluptatum aliquam
              nostrum esse suscipit similique, perspiciatis minus. Aut ipsam
              blanditiis perspiciatis assumenda magni?
            </p>
          </div>
        </div>
      </motion.div>
      {/* --------------------------------- */}
      <motion.div
        whileInView={{
          x: [500, 0],
          opacity: [0, 1],
        }}
        transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
        className="card2 flex sticky top-[18rem] w-screen h-auto items-end justify-end backdrop-blur-lg"
      >
        <div className="w-2/4 flex items-center justify-center">
          <div className="w-3/4 bg-purple-500/20 border rounded-md p-4 ">
            <p className="flex text-3xl gap-3 items-center justify-center">
              <span>
                <img className="w-12" src={brain} alt="" />
              </span>
              <span className="">AI-Powered Explanations</span>
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              tenetur nisi dicta quia doloribus nobis porro voluptatum aliquam
              nostrum esse suscipit similique, perspiciatis minus. Aut ipsam
              blanditiis perspiciatis assumenda magni?
            </p>
          </div>
        </div>
      </motion.div>
      {/* ------------------------------------------- */}
      <motion.div
        whileInView={{
          x: [500, 0],
          opacity: [0, 1],
        }}
        transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
        className="card2 flex sticky mb-24 top-[19rem] w-screen h-auto items-end justify-end backdrop-blur-lg"
      >
        <div className="w-2/4 flex items-center justify-center">
          <div className="w-3/4 bg-orange-500/20 border rounded-md p-4 ">
            <p className="flex text-3xl gap-3 items-center justify-center">
              <span>
                <img className="w-12" src={book} alt="" />
              </span>
              <span className="">Project-Based Learning</span>
            </p>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              tenetur nisi dicta quia doloribus nobis porro voluptatum aliquam
              nostrum esse suscipit similique, perspiciatis minus. Aut ipsam
              blanditiis perspiciatis assumenda magni?
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Services;
