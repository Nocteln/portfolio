import Image from "next/image";

type project = {
  name: string;
  description: string;
  url: string;
};

export default async function Home() {
  const loadProjects = async () => {
    let results = await fetch("localhost:5050/api/projects").then((resp) =>
      resp.json()
    );
    console.log(results);
  };

  loadProjects();
  let results = await fetch("http://localhost:5050/api/projects").then((resp) =>
    resp.json()
  );
  return (
    <main className="text-green-500">
      {results.map((project: project) => {
        return project.name;
      })}
    </main>
  );
}
