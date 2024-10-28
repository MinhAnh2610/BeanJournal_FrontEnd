import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useDashboard } from "@/context/useDashboard";
import { DiaryEntryGet } from "@/models/DiaryEntry";
import { GetDiaryEntryByIdAPI } from "@/services/DiaryEntryService";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Divider, Textarea, Image } from "@nextui-org/react";
import {
  Check,
  CircleCheck,
  Clock,
  Hash,
  Plus,
  Trash,
  Trash2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { z } from "zod";
import { toast } from "sonner";
// import { UpdateMediaAttachmentsAPI } from "@/services/MediaAttachmentService";

interface UploadedFile {
  file: File;
  previewUrl: string;
}

const formSchema = z.object({
  title: z.string().nonempty(),
  content: z.string().nonempty(),
  mood: z.string().nonempty(),
});

const DiaryPlayground = () => {
  const { tags, diaries, updateDiaryById, deleteDiaryById } = useDashboard();
  const { id } = useParams();
  const [diary, setDiary] = useState<DiaryEntryGet>();
  const navigate = useNavigate();

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // State to track selected tags by their IDs
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  // Toggles the tag's selection state
  const toggleTag = (tagId: number) => {
    setSelectedTags(
      (prevSelectedTags) =>
        prevSelectedTags.includes(tagId)
          ? prevSelectedTags.filter((id) => id !== tagId) // Deselect if already selected
          : [...prevSelectedTags, tagId] // Select if not selected
    );
  };

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

  const DeleteDiary = async () => {
    deleteDiaryById(id ? +id : 0);
    navigate(
      `/dashboard/diary/${
        diaries.sort((a, b) => a.entryId - b.entryId)[diaries.length - 2]
          .entryId
      }`
    );
  };

  const GetDiary = async () => {
    await GetDiaryEntryByIdAPI(id ? +id : 0)
      .then((res) => {
        if (res?.data) {
          setDiary(res?.data);
          setValue("title", res.data.title);
          setValue("content", res.data.content);
          setValue("mood", res.data.mood);

          const tagIds = res.data.tags.map((tag) => tag.tagId);
          setSelectedTags(tagIds);
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: diary?.title || "",
      content: diary?.content || "",
      mood: diary?.mood || "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      updateDiaryById(
        id ? +id : 0,
        values.title,
        values.content,
        values.mood,
        selectedTags
      );
      console.log(uploadedFiles.map((x) => x.file));

      // await UpdateMediaAttachmentsAPI(
      //   id ? +id : 0,
      //   uploadedFiles.map((x) => x.file)
      // ).catch((err) => toast.error(err));
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }

  const { setValue } = form;

  useEffect(() => {
    GetDiary();
  }, [id, isLoading]);

  return (
    <div className="p-4">
      <div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <div className="grid grid-flow-row grid-cols-12 items-center">
              <div className="col-span-11">
                <div className="pb-4">
                  <h1 className="flex items-center font-semibold text-3xl text-purple-950">
                    <Hash className="w-6 h-6 text-gray-500 mr-4" />{" "}
                    {diary?.title} / {diary?.mood}
                  </h1>
                </div>
                <div className="flex items-center pl-10">
                  <p className="flex items-center gap-2 text-lg font-semibold text-gray-400">
                    <Clock className="w-6 h-6 text-gray-500" /> Latest update
                  </p>
                  <p className="text-lg font-semibold text-purple-950 pl-24">
                    {diary?.updatedAt &&
                      new Date(diary?.updatedAt).toDateString()}
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
                <Button
                  variant="light"
                  isIconOnly
                  onClick={() => {
                    if (
                      window.confirm(
                        "Are you sure you want to delete this diary?"
                      )
                    ) {
                      DeleteDiary();
                    }
                  }}
                >
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
                      id="titleText"
                      placeholder="Your diary title..."
                      className="bg-transparent border-none focus:border-none h-20 text-4xl font-bold shadow-none text-gray-800"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Divider className="mt-4 mb-8" />
            <div className="grid grid-cols-7 gap-4">
              <div className="col-span-5">
                <FormField
                  control={form.control}
                  name="content"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          type="text"
                          variant="underlined"
                          size="lg"
                          placeholder="What's on your mind..."
                          height={300}
                          minRows={12}
                          maxRows={100}
                          {...field}
                          className="shadow-none text-gray-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="col-span-2">
                <h1 className="text-xl">Select your tags</h1>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Button
                      key={tag.tagId}
                      onClick={() => toggleTag(tag.tagId)}
                      variant="bordered"
                      className={`px-3 py-1 rounded-full text-white font-semibold ${
                        selectedTags.includes(tag.tagId)
                          ? "bg-colour-indigo"
                          : "bg-white text-gray-400"
                      }`}
                    >
                      <img src={tag.iconUrl} className="h-8 w-8" />
                      {tag.name}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-colour-blue rounded-xl flex items-center my-8 pl-4">
              <CircleCheck className="h-7 w-7" />
              <FormField
                control={form.control}
                name="mood"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="moodText"
                        type="text"
                        defaultValue={diary?.mood}
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
            <Divider />
            <div className="flex gap-4">
              {diary?.mediaAttachments.map((media) => (
                <Image
                  key={media.mediaId}
                  isBlurred
                  width={200}
                  src={media.filePath}
                  alt="media"
                  className="my-8"
                />
              ))}
            </div>
            <Divider />
            <h1 className="text-xl my-2">Upload images here</h1>
            <div className=" flex gap-4 flex-wrap">
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
