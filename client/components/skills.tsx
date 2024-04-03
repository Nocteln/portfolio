"use client";

import { useEffect, useState } from "react";
import { Card } from "./ui/card";

interface Skill {
  _id: string;
  list: string[];
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([
    { _id: "t", list: ["Loading..."] },
  ]);

  useEffect(() => {
    const loadSkills = async () => {
      let res: Skill[] = await fetch("http://nocteln.fr:5050/api/skills").then(
        (res) => res.json()
      );
      setSkills(res);
    };
    loadSkills();
  }, []);

  return (
    <div className="flex flex-wrap justify-center max-w-[50vw] items-center gap-1">
      {skills.map((skill) =>
        skill.list.map((s) => (
          <Card className="p-4 m-5 border-4 text-gray-800 text-bold" key={s}>
            {s}
          </Card>
        ))
      )}
    </div>
  );
};

export default Skills;
