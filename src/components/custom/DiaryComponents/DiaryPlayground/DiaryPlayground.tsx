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
import { Check, Clock, Hash, Plus, Trash, Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface UploadedFile {
  file: File;
  previewUrl: string;
}

const formSchema = z.object({
  title: z.string().nonempty(),
  content: z.string().nonempty(),
  mood: z.string().nonempty()
});

const DiaryPlayground = () => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newFiles = Array.from(files).map((file) => ({
        file,
        previewUrl: URL.createObjectURL(file),
      }));
      setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    }
  };

  const handleDelete = (index: number) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

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
      console.log(uploadedFiles);
      console.log(isLoading);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="p-4">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="grid grid-flow-row grid-cols-12 items-center">
              <div className="col-span-11">
                <div className="pb-4">
                  <h1 className="flex items-center font-semibold text-3xl text-purple-950">
                    <Hash className="w-6 h-6 text-gray-500 mr-4" /> Fitness /
                    Everyday activity
                  </h1>
                </div>
                <div className="flex items-center pl-10">
                  <p className="flex items-center gap-2 text-lg font-semibold text-gray-400">
                    <Clock className="w-6 h-6 text-gray-500" /> Latest update
                  </p>
                  <p className="text-lg font-semibold text-purple-950 pl-24">
                    Aug 08 2024
                  </p>
                </div>
              </div>
              <div className="col-span-1">
                <Button
                  variant="light"
                  isIconOnly
                  type="submit"
                  isLoading={isLoading}
                >
                  <Check className="w-8 h-8 text-green-500" />
                </Button>
                <Button variant="light" isIconOnly>
                  <Trash2 className="w-8 h-8 text-red-500" />
                </Button>
              </div>
            </div>
            <Divider className="my-4" />
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
                      className="bg-transparent border-none focus:border-none text-4xl font-bold shadow-none h-20 text-gray-800"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Divider className="mt-4 mb-8" />
            <div className="bg-colour-lavender rounded-lg flex items-center mb-8">
              <FormField
                control={form.control}
                name="mood"
                render={({ field }) => (
                  <FormItem className="rounded-sm border-l-4 border-l-colour-indigo">
                    <FormControl>
                      <Input
                        type="text"
                        {...field}
                        placeholder="What's your mood today..."
                        className="h-16 bg-transparent border-none focus:border-none text-2xl font-bold shadow-none text-gray-800"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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
                      className="shadow-none text-gray-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="p-4 flex gap-4 flex-wrap">
              {/* Display uploaded files with delete button */}
              {uploadedFiles.map((file, index) => (
                <div key={index} className="relative w-32 h-32">
                  <img
                    src={file.previewUrl}
                    alt={file.file.name}
                    className="w-full h-full object-cover rounded-2xl shadow"
                  />
                  <button
                    onClick={() => handleDelete(index)}
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1"
                  >
                    <Trash className="text-sm" />
                  </button>
                </div>
              ))}

              {/* Placeholder card with Plus icon */}
              <div className="w-32 h-32 bg-colour-lavender border-colour-indigo border-2 flex items-center justify-center rounded-2xl shadow cursor-pointer">
                <label className="flex items-center justify-center cursor-pointer w-full h-full">
                  <Input
                    type="file"
                    onChange={handleFileChange}
                    accept="image/*"
                    style={{ display: "none" }}
                  />
                  <Plus className="text-colour-indigo h-10 w-10" />
                </label>
              </div>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default DiaryPlayground;
