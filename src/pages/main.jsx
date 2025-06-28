import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className="select-none overflow-hidden w-full h-full">
      <div className="select-none relative h-full z-10 grid">
        <div>
          <h1 className="select-none text-[40px] lg:text-[56px] text-[#d4d3d3] h-[70px] font-comic">
            Tengis Tsogtsaikhan
          </h1>
          <div className="select-none text-[14px] ml-[10px] sm:mt-0 mt-[50px] text-[#9a9898]">
            Full Stack Developer
          </div>

          <div className="select-none ml-[10px] w-[40px]  mt-[50px] grid gap-3 text-white text-[14px] font-mono">
            <div>
              <img src="/images/dot.png" className="select-none h-[8px]" alt="" />
            </div>
            {["about", "skills", "projects", "contact"].map((item) => (
              <div
                key={item}
                className="select-none hover:text-[#838181] cursor-pointer transition-colors duration-300"
                onClick={() => navigate(`/${item}`)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.div
              className="select-none absolute bg-[#6f6e6e91] md:bg-[#6f6e6e00] px-4 py-4 rounded-lg md:py-0 md:px-0 right-[10px] w-[200px] md:w-[180px] bottom-16 text-[#d4d3d3] text-[12px] font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Hey it's me, Tengis Tsogtsaikhan, but you can call me Ts. I would
              like to help you with your projects, so feel free to contact me. I
              am a Full Stack Developer.
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Main;
