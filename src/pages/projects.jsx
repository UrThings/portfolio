import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import ProjectGallery from "../components/projectCard";

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="select-none overflow-hidden h-full">
      <div className="select-none relative h-full z-10 grid">
        <div>
          <h1 className="select-none text-[40px] lg:text-[56px] text-[#d4d3d3] h-[70px] font-comic">
            Tengis Tsogtsaikhan
          </h1>
          <div className="select-none text-[14px] ml-[10px] sm:mt-0 mt-[50px] text-[#9a9898]">
            Full Stack Developer
          </div>

          <div className="select-none ml-[10px] w-[ 40px] mt-[30px] md:mt-[50px] grid gap-3 text-white text-[14px] font-mono">
            <div
              className="select-none hover:text-[#838181] cursor-pointer transition-colors duration-300"
              onClick={() => navigate(`/`)}
            >
              Main
            </div>
            <div
              className="select-none hover:text-[#838181] cursor-pointer transition-colors duration-300"
              onClick={() => navigate(`/about`)}
            >
              About
            </div>
            <div
              className="select-none hover:text-[#838181] cursor-pointer transition-colors duration-300"
              onClick={() => navigate(`/skills`)}
            >
              Skills
            </div>
            <motion.div
              className="select-none hover:text-[#838181] cursor-pointer transition-colors duration-300"
              onClick={() => navigate(`/`)}
            >
              <img src="/images/dot.png" className="select-none h-[8px]" alt="" />
            </motion.div>
            {["contact"].map((item) => (
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
              className="select-none absolute top-96 w-full sm:mt-[0] md:right-[10px] md:w-[180px] md:bottom-8  text-[#d4d3d3] text-[12px] font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <motion.div
                className="select-none absolute md:right-[10px] md:w-[300px] md:bottom-0  text-[#d4d3d3] text-[12px] font-mono"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <div>
                  <div className="select-none font-comic text-[32px]">Projects</div>
                  <ProjectGallery />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="select-none absolute inset-0 bg-black/40 z-0"></div>
    </div>
  );
};

export default Projects;
