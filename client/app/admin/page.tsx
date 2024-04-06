import Title from "@/components/title";
import Projects from "./projects";
import Skills from "./skills";
import MessagePage from "./messages";
import { getSession } from "@auth0/nextjs-auth0";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
// import { useUser } from "@auth0/nextjs-auth0/client";

export default async function AdminPage() {
  const session = await getSession();
  if (!session) return <div>Loading...</div>;
  const { user } = session;
  // const { user, error, isLoading } = useUser();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;
  if (!user) console.log("user is not");

  return (
    <main className="flex items-center justify-center flex-col font-['pt']">
      <a className="text-white text-3xl" href="/api/auth/login">
        Login
      </a>
      <a className="text-white text-3xl" href="/api/auth/logout">
        Logout
      </a>
      <Title>Admin Page</Title>
      <Title>Projects</Title>
      <Projects user={user} />
      <Title>Skills</Title>
      <Skills />
      <Title>Messages</Title>
      <MessagePage />
    </main>
  );
}

export const getServerProps = withPageAuthRequired();
