"use client";

import { useEffect, useState } from "react";
import { Card } from "./ui/card";

interface Skill {
  _id: number;
  name: string;
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const loadSkills = async () => {
      let res: Skill[] = await fetch("https://nocteln.fr:5050/api/skills").then(
        (res) => res.json()
      );
      setSkills(res);
    };
    loadSkills();
  }, []);

  return (
    <div className="flex flex-wrap justify-center max-w-[50vw] items-center gap-1">
      {skills.map((skill) => (
        <Card
          className="p-4 m-5 border-4 text-gray-800 text-bold"
          key={skill._id}
        >
          {skill.name}
        </Card>
      ))}
    </div>
  );
};

export default Skills;
