import { CheckCircle2 } from "lucide-react";
import diary from "../../../assets/diary.png";

const Demo = () => {
  const checklistItems = [
    {
      title: "Start a New Entry",
      description:
        'Begin by selecting the "New Entry" option on the dashboard to open the diary editor. You can choose a title and start writing your thoughts, reflections, or daily experiences.',
    },
    {
      title: "Add Mood and Tags",
      description:
        "Select a mood that best represents how you’re feeling and assign relevant tags to categorize your entry. This helps organize your entries for easy searching later.",
    },
    {
      title: "Attach Media",
      description:
        "Upload any media attachments like photos, videos, or documents to enrich your entry. You can visually capture moments alongside your written reflections.",
    },
    {
      title: "Save or Auto-Save",
      description:
        "Once you're done, either manually save the entry or let the auto-save feature handle it for you. Your entry will be stored securely and available for future edits or viewing.",
    },
  ];

  return (
    <div className="mt-20">
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
          See It In{" "}
          <span className="bg-gradient-to-br from-colour-indigo to-colour-peach text-transparent bg-clip-text">
            Action.
          </span>
        </h2>
        <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
          Here's a sneak peek of how Bean Journal works.
        </p>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={diary} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-white mx-6 bg-colour-indigo h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demo;
