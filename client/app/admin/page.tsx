import Title from "@/components/title";
import Projects from "./projects";
import Skills from "./skills";

const AdminPage = () => {
  return (
    <main className="flex items-center justify-center flex-col font-['pt']">
      <Title>Admin Page</Title>
      <Title>Projects</Title>
      <Projects />
      <Title>Skills</Title>
      <Skills />
    </main>
  );
};

export default AdminPage;
