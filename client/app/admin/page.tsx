import Title from "@/components/title";
import Projects from "./projects";
import Skills from "./skills";
import MessagePage from "./messages";

const AdminPage = () => {
  return (
    <main className="flex items-center justify-center flex-col font-['pt']">
      <Title>Admin Page</Title>
      <Title>Projects</Title>
      <Projects />
      <Title>Skills</Title>
      <Skills />
      <Title>Messages</Title>
      <MessagePage />
    </main>
  );
};

export default AdminPage;
