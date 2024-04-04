import Title from "@/components/title";
import Projects from "./projects";

const AdminPage = () => {
  return (
    <main className="flex items-center justify-center flex-col font-['pt']">
      <Title>Admin Page</Title>
      <Title>Projects</Title>
      <Projects />
      <Title>Skills</Title>
    </main>
  );
};

export default AdminPage;
