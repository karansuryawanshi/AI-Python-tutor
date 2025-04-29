import React from "react";

import codeImage from "../assets/code.png";
import openBook from "../assets/open-book.png";
import brain from "../assets/brain.png";
import book from "../assets/book.png";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <div className="card1 flex items-center justify-center sticky top-[16rem] w-screen h-auto lg:items-end mt-[16rem] lg:justify-end backdrop-blur-sm">
        <div className="w-screen lg:w-2/4 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
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
      <div className="card1 flex items-center justify-center sticky w-screen h-auto lg:items-end lg:justify-end backdrop-blur-sm">
        <div className="w-screen lg:w-2/4 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="w-3/4 bg-green-500/20 border rounded-md p-4 "
          >
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
          </motion.div>
        </div>
      </div>
      {/* --------------------------------- */}
      <div className="card1 flex items-center justify-center sticky w-screen h-auto lg:items-end lg:justify-end backdrop-blur-sm">
        <div className="w-screen lg:w-2/4 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="w-3/4 bg-purple-500/20 border rounded-md p-4 "
          >
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
          </motion.div>
        </div>
      </div>
      {/* ------------------------------------------- */}

      <div className="card1 flex items-center justify-center sticky w-screen h-auto lg:items-end lg:justify-end backdrop-blur-sm">
        <div className="w-screen lg:w-2/4 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="w-3/4 bg-orange-500/20 border rounded-md p-4 "
          >
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
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Services;
