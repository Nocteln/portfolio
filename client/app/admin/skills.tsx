"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { ObjectId } from "mongodb";

interface Skill {
  _id: number;
  name: string;
}

const Skills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const loadSkills = async () => {
      let res: Skill[] = await fetch("http://nocteln.fr:5050/api/skills").then(
        (res) => res.json()
      );
      setSkills(res);
    };
    loadSkills();
  }, []);

  async function onDelete(id: number) {
    console.log(id);
    await fetch(`http://localhost:5050/api/skills/${id}`, {
      method: "DELETE",
    }).catch((err) => alert(err));
    setSkills(skills.filter((skill) => skill._id !== id));
  }

  async function onAdd() {
    const name = prompt("Enter the name of the new skill");
    if (!name) return;
    //@ts-ignore
    // const newObjectId = new ObjectId();
    // console.log(newObjectId);
    await fetch("http://localhost:5050/api/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });
    setSkills([...skills, { _id: 34, name }]);
  }

  return (
    <div className="flex flex-wrap justify-center max-w-[50vw] items-center gap-1">
      {skills.map((skill) => (
        <Card
          className="p-4 m-5 border-4 text-gray-800 text-bold text-center"
          key={skill.name}
        >
          <CardHeader>{skill.name}</CardHeader>
          <CardFooter>
            <Button variant="delete" onClick={() => onDelete(skill._id)}>
              Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
      <Card className="p-4 m-5 border-4 text-gray-800 text-bold text-center items-center justify-center flex">
        <Button onClick={onAdd}>AJOUTER</Button>
      </Card>
    </div>
  );
};

export default Skills;