"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { useEffect, useState } from "react";

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
          <Card
            className="p-4 m-5 border-4 text-gray-800 text-bold text-center"
            key={s}
          >
            <CardHeader>{s}</CardHeader>
            <CardFooter>
              <Button variant="delete">Delete</Button>
            </CardFooter>
          </Card>
        ))
      )}
      <Card className="p-4 m-5 border-4 text-gray-800 text-bold text-center items-center justify-center flex">
        <Button>AJOUTER</Button>
      </Card>
    </div>
  );
};

export default Skills;
