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
import AddProject from "./addProject";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Project = {
  _id: number;
  name: string;
  description: string;
  url: string;
  imageUrl: string;
  infoUrl?: string;
};

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function loadProjects() {
      let res = await fetch("http://nocteln.fr:5050/api/projects").then((res) =>
        res.json()
      );
      setProjects(res);
    }

    loadProjects();
  }, []);

  async function onDelete(id: number) {
    console.log(id);
    await fetch(`http://localhost:5050/api/projects/${id}`, {
      method: "DELETE",
    }).catch((err) => alert(err));
    setProjects(projects.filter((project) => project._id !== id));
  }

  return (
    <div className="lg:max-w-[800px] md:max-w-[500px] max-w-[300px]">
      <Carousel>
        <CarouselContent className="flex items-center">
          {projects.map((project: Project) => {
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
                  onDelete={() => onDelete(project._id)}
                />
              </CarouselItem>
            );
          })}
          <CarouselItem>
            <Card>
              <CardContent>
                <CardHeader className="text-center">
                  <CardTitle className="text-slate-300">
                    Ajouter un projet
                  </CardTitle>
                  <CardDescription className="text-slate-500"></CardDescription>
                </CardHeader>
                <AddProject />
              </CardContent>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
