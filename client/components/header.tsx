"use client";
import { links } from "@/data/data";
import { Button } from "./ui/button";
import { useState } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const [activeSection, setActiveSection] = useState(1);

  const handleClick = (id: number) => {
    setActiveSection(id);
  };

  return (
    <nav className="flex justify-center items-center bg-white/5 sm:m-5 lg:max-w-[700px] sm:rounded-lg fixed backdrop-blur-sm shadow-md z-50 w-full top-0 m-0">
      <ul className="flex">
        {links.map((link) => {
          return (
            <li className=" p-4" key={link.id}>
              <Link href={`#${link.link}`}>
                <Button
                  className="rounded-md"
                  onClick={() => handleClick(link.id)}
                  variant={activeSection === link.id ? "active" : "ghost"}
                >
                  {link.name}
                </Button>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
