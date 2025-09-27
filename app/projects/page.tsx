"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Category = "frontend" | "fullstack" | "all";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  category: Category;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const projects: Project[] = [
    {
      id: 1,
      title: "Resmix",
      description:
        "A modern web application that use AI to analyzes resumes for ATS compatibility with a instant feedback.",
      technologies: ["Next.js", "puter.js", "TypeScript", "Tailwind CSS"],
      category: "fullstack",
      githubUrl: "https://github.com/HusseinSaeid/ats-resume-checker",
      liveUrl: "https://resumix-pi.vercel.app/",
      imageUrl: "/resumix.png",
    },
    {
      id: 2,
      title: "Personal Portfolio",
      description:
        "A responsive personal portfolio website showcasing projects and skills with modern design principles.",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Swiper.js",
      ],
      category: "frontend",
      githubUrl: "https://github.com/HusseinSaeid/Personal-Portfolio",
      liveUrl: "https://portfolio-demo.com",
      imageUrl: "/portfolio.png",
    },
    {
      id: 3,
      title: "FasterUI Clone",
      description:
        "A modern landing page template that features a responsive navigation bar, a hero section, and a collection of services.",
      technologies: [
        "Next.js",
        "Typescript",
        "Tailwind CSS",
        "Aceternity Ui",
        "Shadcn/Ui",
      ],
      category: "frontend",
      githubUrl: "https://github.com/HusseinSaeid/fasterui",
      liveUrl: "https://fasterui-lemon.vercel.app/Q",
      imageUrl: "/fasterui.png",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <div className="bg-[#FFDD55] overflow-x-hidden">
      <main>
        <div className="flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-64 mt-14 px-6">
          <h1 className="text-2xl xl:text-4xl font-extrabold">
            Featured Projects <br />
          </h1>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mt-10 gap-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-2 rounded-lg font-bold transition duration-300 ease-in-out ${
              activeCategory === "all"
                ? "bg-black text-white shadow-[4px_4px_0px_white]"
                : "bg-white text-black shadow-[4px_4px_0px_black] hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_white]"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveCategory("frontend")}
            className={`px-6 py-2 rounded-lg font-bold transition duration-300 ease-in-out ${
              activeCategory === "frontend"
                ? "bg-black text-white shadow-[4px_4px_0px_white]"
                : "bg-white text-black shadow-[4px_4px_0px_black] hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_white]"
            }`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveCategory("fullstack")}
            className={`px-6 py-2 rounded-lg font-bold transition duration-300 ease-in-out ${
              activeCategory === "fullstack"
                ? "bg-black text-white shadow-[4px_4px_0px_white]"
                : "bg-white text-black shadow-[4px_4px_0px_black] hover:bg-black hover:text-white hover:shadow-[4px_4px_0px_white]"
            }`}
          >
            Full Stack
          </button>
        </div>

        <div className="w-full px-4 py-8 sm:px-6 md:px-8 lg:px-12 sm:py-10 md:py-12 lg:mt-8 xl:mt-8">
          {filteredProjects.length > 0 ? (
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={30}
              slidesPerGroup={1}
              loop={false}
              pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                  return `<span class="${className} !bg-black !w-2 !h-2 rounded-2xl"></span>`;
                },
              }}
              navigation={false}
              className="w-[100%] max-w-[1600px] cursor-grab"
            >
              {filteredProjects.map((project) => (
                <SwiperSlide
                  key={project.id}
                  aria-label={`Project: ${project.title}`}
                >
                  <div
                    className="bg-black  text-white  
                      rounded-2xl p-4 sm:p-5 md:p-6 
                      h-auto md:h-[450px] lg:h-[480px] xl:h-[450px]
                      w-[90%] max-w-[900px] mx-auto mb-8 
                      shadow-[6px_6px_0px_white]
                      transition duration-300 ease-in-out overflow-hidden
                      "
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                      {/* Project Details */}
                      <div className="flex flex-col justify-center order-2 md:order-1">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-3 md:mb-4 text-[#FFDD55]">
                          {project.title}
                        </h2>
                        <div className="overflow-y-auto flex-1 w-full scrollbox pr-2">
                          <p className="text-left text-sm sm:text-base">
                            {project.description}
                          </p>
                        </div>
                        <div className="mt-auto">
                          <div className="mt-4">
                            <h3 className="text-sm font-bold mb-2">
                              Technologies:
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <span
                                  key={index}
                                  className="bg-[#FFDD55] text-black text-xs px-2 py-1 rounded-md"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex gap-6 mt-4">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-[#FFDD55] transition-colors"
                                aria-label={`GitHub repository for ${project.title}`}
                              >
                                <FaGithub className="text-xl" />
                                <span className="text-sm font-bold">
                                  View Code
                                </span>
                              </a>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 hover:text-[#FFDD55] transition-colors"
                                aria-label={`Live demo for ${project.title}`}
                              >
                                <FaExternalLinkAlt className="text-xl" />
                                <span className="text-sm font-bold">
                                  Live Demo
                                </span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Project Preview Image */}
                      <div className="order-1 md:order-2 flex items-center justify-center hover:scale-105 duration-500">
                        <img
                          src={
                            project.imageUrl ||
                            `https://placehold.co/600x400/000000/FFDD55?text=${project.title}`
                          }
                          alt={`Preview of ${project.title}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl font-bold">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
