import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Divider, Textarea } from "@nextui-org/react";
import { Clock, Hash, Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import MoodPicker from "../MoodPicker";

const formSchema = z.object({
  title: z.string().nonempty(),
  content: z.string().nonempty(),
  mood: z.string().nonempty(),
});

const DiaryPlayground = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      mood: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      console.log(values);
      console.log(isLoading);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-4">
      <div className="grid grid-flow-row grid-cols-12 items-center">
        <div className="col-span-11">
          <div className="pb-4">
            <h1 className="flex items-center font-semibold text-4xl text-purple-950">
              <Hash className="w-6 h-6 text-gray-500 mr-4" /> Fitness / Everyday
              activity
            </h1>
          </div>
          <div className="flex items-center pl-10">
            <p className="flex items-center gap-2 text-lg font-semibold text-gray-400">
              <Clock className="w-6 h-6 text-gray-500" /> Latest update
            </p>
            <p className="text-lg font-semibold text-purple-950 pl-48">
              Aug 08 2024
            </p>
          </div>
        </div>
        <div className="col-span-1">
          <Button variant="light" isIconOnly>
            <Trash2 className="w-8 h-8 text-red-500" />
          </Button>
        </div>
      </div>
      <Divider className="my-6" />
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="mood"
              render={() => (
                <FormItem>
                  <FormControl>
                    <MoodPicker />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      placeholder="Your diary title..."
                      className="bg-transparent border-none focus:border-none text-5xl font-bold shadow-none h-20 text-purple-950"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Divider className="my-6" />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      type="text"
                      {...field}
                      variant="underlined"
                      size="lg"
                      placeholder="What's on your mind..."
                      height={300}
                      minRows={12}
                      maxRows={100}
                      className="text-md font-bold shadow-none text-gray-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="file"
                      {...field}
                      className="bg-transparent focus:border-none font-bold"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default DiaryPlayground;