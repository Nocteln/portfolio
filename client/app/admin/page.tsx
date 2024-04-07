import Title from "@/components/title";
import Projects from "./projects";
import Skills from "./skills";
import MessagePage from "./messages";
import { getSession } from "@auth0/nextjs-auth0";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";
// import { useUser } from "@auth0/nextjs-auth0/client";

export default async function AdminPage() {
  const session = await getSession();
  if (!session)
    return (
      <div className="flex w-full h-full items-center justify-center pt-[48vh]">
        <Button
          variant="active"
          size="lg"
          className="align-center justify-center text-center items-center"
        >
          <a href="/api/auth/login">LOGIN</a>
        </Button>
      </div>
    );
  const { user } = session;

  // const { user, error, isLoading } = useUser();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;
  if (!user) console.log("user is not");

  return (
    <main className="flex items-center justify-center flex-col font-['pt']">
      <a
        className="text-white text-3xl  top-10 right-10 fixed"
        href="/api/auth/logout"
      >
        Logout
      </a>
      <Title>Admin Page</Title>
      <Title>Projects</Title>
      <Projects user={user} />
      <Title>Skills</Title>
      <Skills user={user} />
      <Title>Messages</Title>
      <MessagePage />
    </main>
  );
}

// export const getServerProps = withPageAuthRequired();
