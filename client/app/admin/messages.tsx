"use client";

import { useEffect, useState } from "react";
import MessageCard from "./messageCard";
import { UserProfile } from "@auth0/nextjs-auth0/client";

interface Message {
  _id: string;
  values: {
    name: string;
    sujet: string;
    email: string;
    message: string;
  };
}
type Props = {
  user: UserProfile;
};
const MessagePage = ({ user }: Props) => {
  const [messages, setMessages] = useState<Message[]>([]);
  if (!user) return;
  const userId: string = user && typeof user.id === "string" ? user.id : "";
  useEffect(() => {
    async function loadProjects() {
      let res = await fetch("https://nocteln.fr:5050/api/messages").then(
        (res) => res.json()
      );
      setMessages(res);
      console.log(res);
    }

    loadProjects();
  }, []);

  return (
    <div className="flex flex-col ">
      {messages.map((msg) => {
        async function archive() {
          await fetch("https://nocteln.fr:5050/api/messages/archive", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "User-ID": userId,
            },
            body: JSON.stringify(msg),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Erreur lors de l'envoi des données.");
              }
              // Gérer la réponse si nécessaire
              alert("Message archivé!");
            })
            .catch((error) => {
              console.error("Erreur lors de la requête Fetch:", error);
            });

          await fetch(`https://nocteln.fr:5050/api/messages/${msg._id}`, {
            method: "DELETE",
            headers: {
              "User-ID": userId,
            },
          });
          setMessages(messages.filter((message) => message._id !== msg._id));
        }

        async function deleteMsg() {
          await fetch(`https://nocteln.fr:5050/api/messages/${msg._id}`, {
            method: "DELETE",
            headers: {
              "User-ID": userId,
            },
          });

          alert("message supprimé!");
          setMessages(messages.filter((message) => message._id !== msg._id));
        }
        return (
          <MessageCard
            key={msg._id}
            name={msg.values.name}
            sujet={msg.values.sujet}
            email={msg.values.email}
            message={msg.values.message}
            onArchive={archive}
            onDelete={deleteMsg}
          />
        );
      })}
    </div>
  );
};

export default MessagePage;
