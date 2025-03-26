import React, { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScroll, useMotionValueEvent } from "framer-motion";

const Spline = React.memo(
  React.lazy(() => import("@splinetool/react-spline")),
  (prevProps, nextProps) => prevProps.scene === nextProps.scene
);

// const Spline = React.lazy(() => import("@splinetool/react-spline"));

const Home = () => {
  const navigate = useNavigate();
  const [showGlobe, setShowGlobe] = useState(false);

  const { scrollY } = useScroll();

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
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          <Spline scene="https://prod.spline.design/paksGGxigyE8WS0h/scene.splinecode" />
          {/* </Suspense> */}
        </main>

        {showGlobe && (
          <div
            id="globe"
            className="absolute top-10 left-[28rem] overflow-hidden pointer-events-none flex w-full h-full z-20 will-change-transform"
          >
            {/* <Suspense fallback={<div>Loading...</div>}> */}
            {/* <Spline scene="https://prod.spline.design/0PPJLepOiViDBEiG/scene.splinecode" /> */}
            <Spline scene="https://prod.spline.design/qHL4nUEP1Txyp5f6/scene.splinecode" />
            {/* <Spline scene="https://prod.spline.design/Ec9l3F1qdNfoRhar/scene.splinecode" /> */}
            {/* </Suspense> */}
          </div>
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
      <div className="text-neutral-400 w-screen h-screen overflow-hidden bg-[#0f0f0f]">
        Hello Buddy
      </div>
    </div>
  );
};

export default Home;
