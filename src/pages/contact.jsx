import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="select-none w-full h-full overflow-hidden">
      <div className="select-none relative h-full z-10 grid">
        <div>
          <h1 className="select-none text-[40px] lg:text-[56px] text-[#d4d3d3] h-[70px] font-comic">
            Tengis Tsogtsaikhan
          </h1>
          <div className="select-none text-[14px] ml-[10px] sm:mt-0 mt-[50px] text-[#9a9898]">
            Full Stack Developer
          </div>

          <div className="select-none ml-[10px] w-[40px]  mt-[50px] grid gap-3 text-white text-[14px] font-mono">
            <div
              className="select-none hover:text-[#838181] cursor-pointer transition-colors duration-300"
              onClick={() => navigate(`/`)}
            >
              Main
            </div>
            {["about", "skills", "projects"].map((item) => (
              <div
                key={item}
                className="select-none hover:text-[#838181] cursor-pointer transition-colors duration-300"
                onClick={() => navigate(`/${item}`)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
            ))}
            <motion.div className="select-none hover:text-[#838181]  transition-colors duration-300">
              <img src="/images/dot.png" className="select-none h-[8px]" alt="" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.div
              className="select-none absolute right-[10px] w-[200px] sm:w-[250px] bottom-16 text-[#d4d3d3] text-[12px] font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Facebook:{" "}
              <a
                href="https://www.facebook.com/tngs.tsogtsaikhn/"
                className="select-none text-[#d4d3d3] hover:text-[#838181]"
                target="_blank"
              >
                Tngs Tsogtsaikhn
              </a>
              <br />
              Instagram:{" "}
              <a
                href="https://www.instagram.com/_tengis_tso/"
                className="select-none text-[#d4d3d3] hover:text-[#838181]"
                target="_blank"
              >
                _tengis_tso
              </a>
              <br />
              Phone: +976 88604567 <br />
              Email:{" "}
              <a
                href="mailto:tengis.tso@gmail.com"
                className="select-none text-[#d4d3d3] hover:text-[#838181]"
                target="_blank"
              >
                tengis.tso@gmail.com
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="select-none absolute inset-0 bg-black/40 z-0"></div>
    </div>
  );
};

export default Contact;
