import Image from "next/image";
import Header from "@/components/header";
import Projects from "@/components/projects";
import { Button } from "@/components/ui/button";
import About from "@/components/about";

type project = {
  name: string;
  description: string;
  url: string;
};

export default async function Home() {
  return (
    <main className="flex items-center justify-center flex-col">
      <div className="pt-[100px]" />
      <Header />
      <About />
      <Projects />
      <div className="min-h-[500px]" />
    </main>
  );
}
