import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserProfile } from "@auth0/nextjs-auth0/client";

type Props = {
  user: UserProfile;
};

const AddProject = ({ user }: Props) => {
  const formSchema = z.object({
    name: z.string().min(2).max(50),
    description: z.string().min(5).max(100),
    url: z.string().url(),
    imageUrl: z.string().min(2).max(500),
    infoUrl: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      url: "",
      imageUrl: "",
      infoUrl: "",
    },
  });

  if (!user) return;
  const userId: string = user && typeof user.id === "string" ? user.id : "";

  async function onSubmit(values: z.infer<typeof formSchema>) {
    await fetch("https://nocteln.fr:5050/api/projects", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "User-ID": userId,
      },
      body: JSON.stringify(values),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erreur lors de l'envoi des données.");
        }
        // Gérer la réponse si nécessaire
        alert("Projet ajouté!");
      })
      .catch((error) => {
        console.error("Erreur lors de la requête Fetch:", error);
      });
  }

  return (
    <Dialog>
      <DialogTrigger className="text-center items-center justify-center">
        Open
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Ajout d'un projet</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-green-400">Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      className="bg-[#212528] text-slate-200 border-[#212528] focus:ring"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-green-400">Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      className="bg-[#212528] text-slate-200 border-[#212528] focus:ring"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-green-400">URL</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      className="bg-[#212528] text-slate-200 border-[#212528] focus:ring"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="imageUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-green-400">
                    URL de l'image
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      className="bg-[#212528] text-slate-200 border-[#212528] focus:ring"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="infoUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-green-400">
                    URL supplémentaire
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      className="bg-[#212528] text-slate-200 border-[#212528] focus:ring"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogClose asChild>
              <Button variant="active" className="w-full" type="submit">
                Submit
              </Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default AddProject;
