"use client";
import { links } from "@/data/data";
import { Button } from "./ui/button";
import { useState } from "react";
import { redirect } from "next/navigation";

const Header = () => {
  const [activeSection, setActiveSection] = useState(1);

  const handleClick = (id: number) => {
    setActiveSection(id);
  };

  return (
    <nav className="flex justify-center items-center bg-white/5 m-5 mt-5 max-w-[500px] rounded-lg fixed top-0 bg-opacity- backdrop-blur-sm shadow-md z-50">
      <ul className="flex">
        {links.map((link) => {
          return (
            <li className=" p-4" key={link.id}>
              <Button
                className="rounded-md"
                onClick={() => handleClick(link.id)}
                variant={activeSection === link.id ? "active" : "ghost"}
              >
                {link.name}
              </Button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
