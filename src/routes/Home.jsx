import React, { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import codeImage from "../assets/code.png";
import openBook from "../assets/open-book.png";
import brain from "../assets/brain.png";
import book from "../assets/book.png";
import {
  useScroll,
  useMotionValueEvent,
  useTransform,
  motion,
} from "framer-motion";
// import { TimelineDemo } from "../components/TimeLime";

const Spline = React.memo(
  React.lazy(() => import("@splinetool/react-spline")),
  (prevProps, nextProps) => prevProps.scene === nextProps.scene
);

const Home = () => {
  const navigate = useNavigate();
  const [showGlobe, setShowGlobe] = useState(false);
  const { scrollY } = useScroll();

  // Move #globe left when scrollY reaches 811
  const globeLeft = useTransform(
    scrollY,
    [0, 790, 1007],
    ["28rem", "-30rem", "-30rem"]
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scroll: ", latest);
  });

  useEffect(() => {
    const timer = setTimeout(() => setShowGlobe(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="w-screen h-screen overflow-hidden relative">
        <main className="w-screen h-screen scale-125 overflow-hidden relative z-10">
          <Spline scene="https://prod.spline.design/paksGGxigyE8WS0h/scene.splinecode" />
        </main>

        {showGlobe && (
          <motion.div
            id="globe"
            className="absolute top-10 overflow-hidden pointer-events-none rounded-full flex w-full h-full z-20 will-change-transform"
            style={{ left: globeLeft }}
          >
            <Spline scene="https://prod.spline.design/qHL4nUEP1Txyp5f6/scene.splinecode" />
          </motion.div>
        )}

        <div
          id="info-box"
          className="absolute top-[15rem] left-10 flex flex-col text-center justify-center w-[30rem] h-[13rem] border border-neutral-700 rounded-lg bg-neutral-600/30 z-20 backdrop-blur-sm"
          style={{ willChange: "transform, opacity" }}
        >
          <h1 className="text-5xl text-white font-semibold">
            Learn Python with
          </h1>
          <h1 className="text-5xl text-white font-semibold">PythonLabs</h1>
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
      <div className="bg-[#0f0f0f] flex flex-col absolute gap-[16rem] text-neutral-300">
        <div className="card1 flex sticky top-[16rem] w-screen h-auto items-end mt-[16rem] justify-end backdrop-blur-sm">
          <div className="w-2/4 flex items-center justify-center">
            <div className="w-3/4 bg-neutral-500/20 border rounded-md p-4 ">
              <p className="flex text-3xl gap-3 items-center justify-center">
                <span>
                  <img className="w-12" src={codeImage} alt="" />
                </span>
                <span className="">Interactive Coding</span>
              </p>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore tenetur nisi dicta quia doloribus nobis porro
                voluptatum aliquam nostrum esse suscipit similique, perspiciatis
                minus. Aut ipsam blanditiis perspiciatis assumenda magni?
              </p>
            </div>
          </div>
        </div>
        {/* ------------------------------ */}
        <div className="card2 flex sticky top-[17rem] w-screen h-auto items-end justify-end backdrop-blur-lg">
          <div className="w-2/4 flex items-center justify-center">
            <div className="w-3/4 bg-green-500/20 border rounded-md p-4 ">
              <p className="flex text-3xl gap-3 items-center justify-center">
                <span>
                  <img className="w-12" src={openBook} alt="" />
                </span>
                <span className="">Personalized Learning</span>
              </p>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore tenetur nisi dicta quia doloribus nobis porro
                voluptatum aliquam nostrum esse suscipit similique, perspiciatis
                minus. Aut ipsam blanditiis perspiciatis assumenda magni?
              </p>
            </div>
          </div>
        </div>
        {/* --------------------------------- */}
        <div className="card2 flex sticky top-[18rem] w-screen h-auto items-end justify-end backdrop-blur-lg">
          <div className="w-2/4 flex items-center justify-center">
            <div className="w-3/4 bg-purple-500/20 border rounded-md p-4 ">
              <p className="flex text-3xl gap-3 items-center justify-center">
                <span>
                  <img className="w-12" src={brain} alt="" />
                </span>
                <span className="">AI-Powered Explanations</span>
              </p>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore tenetur nisi dicta quia doloribus nobis porro
                voluptatum aliquam nostrum esse suscipit similique, perspiciatis
                minus. Aut ipsam blanditiis perspiciatis assumenda magni?
              </p>
            </div>
          </div>
        </div>
        {/* ------------------------------------------- */}
        <div className="card2 flex sticky top-[19rem] w-screen h-auto items-end justify-end backdrop-blur-lg">
          <div className="w-2/4 flex items-center justify-center">
            <div className="w-3/4 bg-orange-500/20 border rounded-md p-4 ">
              <p className="flex text-3xl gap-3 items-center justify-center">
                <span>
                  <img className="w-12" src={book} alt="" />
                </span>
                <span className="">Project-Based Learning</span>
              </p>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Inventore tenetur nisi dicta quia doloribus nobis porro
                voluptatum aliquam nostrum esse suscipit similique, perspiciatis
                minus. Aut ipsam blanditiis perspiciatis assumenda magni?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>Hello Buddy</div>
    </div>
  );
};

export default Home;
