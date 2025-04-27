import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScroll, useTransform, motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

import AI_benifits from "../components/AI_benifits";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";

import Services from "../components/Services";

const Home = () => {
  const navigate = useNavigate();
  const [showGlobe, setShowGlobe] = useState(false);
  const { scrollY } = useScroll();

  const globeLeft = useTransform(
    scrollY,
    [0, 790, 1007, 2500, 3000, 3250, 3500, 3800, 4200],
    [
      "30rem",
      "-30rem",
      "-30rem",
      "-30rem",
      "30rem",
      "30rem",
      "-30rem",
      "-30rem",
      "30rem",
    ]
  );

  const globeZIndex = useTransform(
    scrollY,
    [0, 4500, 4500, 5780, 5780],
    ["10", "10", "-50", "-50", "50"]
  );

  // console.log("[scrollY]", scrollY);

  const isHidden = useTransform(scrollY, [0, 2010], ["visible", "hidden"]);
  const globeOpacity = useTransform(scrollY, [1900, 2020], [1, 0]);
  const globeScale = useTransform(scrollY, [1550, 2010], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setShowGlobe(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    // <div>
    <div className="overflow-hidden">
      <div className="w-screen h-screen overflow-hidden ">
        <main className="w-screen h-screen scale-125 pointer-events-none overflow-hidden z-0">
          <Spline scene="https://prod.spline.design/mnIabtus1KTu10TJ/scene.splinecode" />
        </main>

        <motion.div
          id="globe"
          className="fixed top-16 overflow-hidden pointer-events-none rounded-full flex w-full h-full z-50 will-change-transform"
          style={{
            left: globeLeft,
            zIndex: globeZIndex,
          }}
        >
          <Spline scene="https://prod.spline.design/1reIxRbAcgFOADzP/scene.splinecode" />
        </motion.div>

        <div
          id="info-box"
          className="absolute top-[17rem] left-10 flex flex-col text-center justify-center w-[28rem] h-[12rem] border border-neutral-700 rounded-lg bg-neutral-600/30 z-20 backdrop-blur-sm"
          style={{ willChange: "transform, opacity" }}
        >
          <h1 className="text-4xl text-white font-semibold">
            Learn Python with
          </h1>
          <h1 className="text-4xl text-white font-semibold">PythonLabs</h1>
          <div className="flex items-center justify-center">
            <button
              onClick={() => navigate("/chat")}
              className="bg-white flex px-4 py-2 pointer-events-auto rounded-md border-2 border-neutral-800 font-medium"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="bg-gradient-to-b from-black via-zinc-900 to-black flex flex-col gap-[16rem] text-neutral-300">
          <Services></Services>
        </div>
        <div className="bg-gradient-to-b from-black via-zinc-900 to-black">
          <AI_benifits />
        </div>
      </div>
      <div className="text-white py-8 bg-gradient-to-b from-black via-zinc-900 to-black">
        <Subscription></Subscription>
      </div>
      <div className="bg-gradient-to-b from-black via-zinc-900 to-black">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
