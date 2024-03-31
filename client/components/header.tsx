"use client";
import { links } from "@/data/data";
import { Button } from "./ui/button";
import { useState } from "react";

const Header = () => {
  const [activeSection, setActiveSection] = useState(1);

  const handleClick = (id: number) => {
    setActiveSection(id);
  };

  return (
    <div className="flex justify-center items-center bg-[#212528] m-5 max-w-[500px] rounded-lg">
      <ul className="flex">
        {links.map((link) => {
          return (
            <li className=" p-4" key={link.id}>
              <Button
                onClick={() => handleClick(link.id)}
                variant={activeSection === link.id ? "active" : "ghost"}
              >
                {link.name}
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Header;
