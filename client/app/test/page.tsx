import Header from "@/components/header";
import Projects from "@/components/projects";
import { Button } from "@/components/ui/button";

export default async function testPage() {
  return (
    <main className="flex items-center justify-center flex-col">
      <Header />
      <Projects />
    </main>
  );
}
