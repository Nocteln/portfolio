"use client";

import { useEffect, useState } from "react";
import MessageCard from "./messageCard";

interface Message {
  _id: string;
  values: {
    name: string;
    sujet: string;
    email: string;
    message: string;
  };
}

const MessagePage = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    async function loadProjects() {
      let res = await fetch("http://localhost:5050/api/messages").then((res) =>
        res.json()
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
          await fetch("http://localhost:5050/api/messages/archive", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
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

          await fetch(`http://localhost:5050/api/messages/${msg._id}`, {
            method: "DELETE",
          });
          setMessages(messages.filter((message) => message._id !== msg._id));
        }

        async function deleteMsg() {
          await fetch(`http://localhost:5050/api/messages/${msg._id}`, {
            method: "DELETE",
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
