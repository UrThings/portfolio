import React, { useState } from "react";

const projects = [
  {
    title: "GERLY Renting Platform",
    description: "A platform for renting properties.",
    picture: "/images/gerly/Logo.png",
    images: [
      "/images/gerly/1.png",
      "/images/gerly/2.png",
      "/images/gerly/3.png",
      "/images/gerly/4.png",
      "/images/gerly/5.png",
      "images/gerly/8.png",
      "images/gerly/9.png",
    ],
  },
  {
    title: "Food Delivery App",
    description: "An application for delivery food",
    picture: "/images/food/1.png",
    images: [
      "/images/food/2.png",
      "/images/food/3.png",
      "/images/food/4.png",
      "/images/food/5.png",
      "/images/food/6.png",
      "/images/food/7.png",
    ],
  },
  {
    title: "Hotel",
    description: "A platform for Hotel",
    picture: "/images/hotel/1.png",
    images: [
      "/images/hotel/1.png",
      "/images/hotel/2.png",
      "/images/hotel/3.png",
      "/images/hotel/4.png",
      "/images/hotel/7.png",
      "/images/hotel/8.png",
      "/images/hotel/9.png",
      "/images/hotel/10.png",
    ],
  },
];

export default function ProjectGallery() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="select-none relative">
      <div className="select-none grid gap-4 overflow-y-auto md:h-[60vh] h-[330px] mt-4 scrollbar-hide">
        {projects.map((project, index) => (
          <div key={index} className="select-none bg-[#2c2c2c] p-4 rounded-lg shadow-md">
            <div className="select-none h-40 w-full flex items-center justify-center mb-3">
              <img
                src={project.picture}
                alt={project.title}
                className="select-none rounded-md max-h-40 h-auto w-auto  mb-3"
              />
            </div>
            <h2 className="select-none text-[20px] font-bold text-white">
              {project.title}
            </h2>
            <p className="select-none text-[#9a9898] mt-2">{project.description}</p>
            <div className="select-none mt-3">
              <button
                onClick={() => setSelectedProject(project)}
                className="select-none text-blue-500 hover:underline"
              >
                View Project
              </button>
            </div>
          </div>
        ))}
        <div className="h-[50px] select-none">
            .
        </div>
      </div>

      {/* ✅ Modal */}
      {selectedProject && (
        <div
          className="select-none fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setSelectedProject(null)} // ⬅ background дээр дарвал хаагдана
        >
          <div
            className="select-none bg-[#1e1e1e] rounded-lg p-6 max-w-3xl w-full max-h-[80vh] overflow-y-auto scrollbar-hide"
            onClick={(e) => e.stopPropagation()} // ⬅ popup дотор дарвал хаагдахгүй
          >
            <h2 className="select-none text-xl text-white font-bold mb-4">
              {selectedProject.title}
            </h2>
            <div className="select-none grid gap-4 w-auto h-auto max-h-[60vh] justify-center items-center overflow-y-auto scrollbar-hide">
              {selectedProject.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Screenshot ${idx + 1}`}
                  className="select-none rounded-md w-auto h-auto md:min-w-[370px] min-w-[200px] md:max-w-[600px]  "
                />
              ))}
            </div>
            <div className="select-none mt-4 text-right">
              <button
                onClick={() => setSelectedProject(null)}
                className="select-none text-red-400 hover:text-red-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
