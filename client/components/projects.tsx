"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { useEffect, useState } from "react";
import ProjectItem from "./project";

type Project = {
  _id: string;
  name: string;
  description: string;
  url: string;
  imageUrl: string;
  infoUrl?: string;
};

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      let res = await fetch("http://nocteln.fr:5050/api/projects").then((res) =>
        res.json()
      );
      setProjects(res);
    }

    loadProjects();
  }, []);

  return (
    <div className="lg:max-w-[800px] md:max-w-[500px] max-w-[300px]">
      <Carousel>
        <CarouselContent className="flex items-center">
          {projects.map((project: Project) => {
            console.log(project);
            return (
              <CarouselItem
                key={project._id}
                className="md:basis-1/1 lg:basis-1/2"
              >
                <ProjectItem
                  name={project.name}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  url={project.url}
                  infoUrl={project.infoUrl}
                />
              </CarouselItem>
            );
          })}
          <CarouselItem>
            <ProjectItem
              name="more on github"
              description=""
              url="https://github.com/nocteln"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
