import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Meus projetos
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
      <ProjectCard
          src="/portfolio.png"
          title="Este Portfolio"
          description="Construido para ser moderno, com tecnologias modernas como: React, NextJS e Framer Motion"
        />
        <ProjectCard
          src="/emBreve.jpg"
          title="Projeto Secreto 2"
          description="Em breve mais novidades"
        />
        <ProjectCard
          src="/emBreve.jpg"
          title="Projeto Secreto 3"
          description="Em breve mais novidades"
        />
      </div>
    </div>
  );
};

export default Projects;
