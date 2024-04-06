import Image from "next/image";
import Header from "@/components/header";
import Projects from "@/components/projects";
import { Button } from "@/components/ui/button";
import Acceuil from "@/components/acceuil";
import Title from "@/components/title";
import About from "@/components/about";
import Skills from "@/components/skills";
import Form from "@/components/form";

type project = {
  name: string;
  description: string;
  url: string;
};

export default async function Home() {
  return (
    <main className="flex items-center justify-center flex-col font-['pt'] ">
      <div className="pt-[200px]" />
      <Header />
      <a className="text-white text-3xl" href="/api/auth/login">
        Login
      </a>
      <a className="text-white text-3xl" href="/api/auth/logout">
        Logout
      </a>
      <Acceuil />
      <Title id="projects">My Projects</Title>
      <Projects />
      <Title id="skills">My skills</Title>
      <Skills />
      <Title id="about">About me</Title>
      <About />
      <Title id="contact">Contact me</Title>
      <Form />
      <Title id="footer">Footer</Title>
    </main>
  );
}
