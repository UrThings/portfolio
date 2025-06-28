import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Main from "./pages/main";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

export default function App() {
  const location = useLocation(); // ⚠️ ЗӨВХӨН function component дотор л ашиглаж болно

  return (

    <div
      className="w-[100vw] h-[100vh] relative flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 0, y: 50 }} // 🡸 анх орохдоо доороос бүдэг орж ирнэ
      animate={{ opacity: 1, y: 0 }} // 🡸 1 секундийн дотор fade + up болно
      exit={{ opacity: 0, y: -50 }} // 🡸 гарахдаа дээш бүдэг алга болно
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-[90%] border border-white relative h-[90%]  bg-white shadow-lg p-6 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/images/2.mp4" type="video/mp4" />
        </video>
         <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects/>  } />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-[15px] left-[5vw] text-[#9a9898] text-[10px] font-mono">
        @ Tengis Tsogtsaikhan 2025
      </div>
    </div>
     
  );
}
