"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormComponent = () => {
  const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    sujet: z.string().min(2).max(50),
    message: z.string().min(20).max(500),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      sujet: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 w-[50vw]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-green-400">Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Dupont"
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-green-400">Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="dupont@example.com"
                  {...field}
                  className="bg-[#212528] text-slate-200 border-[#212528] focus:ring"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sujet"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-green-400">Subject</FormLabel>
              <FormControl>
                <Input
                  placeholder="Contact"
                  {...field}
                  className="bg-[#212528] text-slate-200 border-[#212528] focus:ring"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-green-400">Message</FormLabel>
              <FormControl>
                {/* <Input  /> */}
                <Textarea
                  placeholder="I contact you for ..."
                  {...field}
                  className="bg-[#212528] text-slate-200 border-[#212528] focus:ring"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="active" className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default FormComponent;
