"use client";

import { useEffect, useState } from "react";

type Project = {
  _id: string;
  name: string;
  description: string;
  url: string;
};

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadProjects() {
      let res = await fetch("http://localhost:5050/api/projects").then((res) =>
        res.json()
      );
      setProjects(res);
    }

    loadProjects();
  }, []);

  return (
    <div className="bg-white">
      {projects.map((project: Project) => {
        console.log(project);
        return <p className="text-white">{project.name}</p>;
      })}
    </div>
  );
}
