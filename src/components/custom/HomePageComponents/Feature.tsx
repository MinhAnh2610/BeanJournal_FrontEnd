import { ImageUp, NotebookPen, SmilePlus, Tags } from "lucide-react";

const Feature = () => {
  const features = [
    {
      icon: <NotebookPen />,
      text: "Write, edit, and organize your entries easily.",
      description:
        "Effortlessly capture your thoughts and ideas with our intuitive journaling interface. Easily create, edit, and organize your entries with a distraction-free design and automatic saving to ensure your reflections are never lost.",
    },
    {
      icon: <SmilePlus />,
      text: "Track how you feel over time and reflect on personal growth.",
      description:
        "Track your emotional well-being by logging your mood with each entry. View your mood history over time to gain valuable insights into your emotional patterns and well-being.",
    },
    {
      icon: <ImageUp />,
      text: "Add images and videos to your entries for richer memories.",
      description:
        "Enhance your journal entries by adding photos, videos, or documents. Capture special moments and enrich your memories with visual content alongside your reflections.",
    },
    {
      icon: <Tags />,
      text: "Organize entries with customizable tags for easy searching.",
      description:
        "Organize your entries with custom tags for easy categorization and searching. Whether it’s personal growth or daily reflections, tags help you quickly find and revisit specific moments.",
    },
  ];

  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <span className="bg-colour-indigo text-white rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          Feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Why Choose{" "}
          <span className="bg-gradient-to-br from-colour-indigo to-colour-peach text-transparent bg-clip-text">
            Bean Journal
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-full lg:w-1/2">
            <div className="flex">
              <div className="flex mx-6 h-10 w-10 p-2 bg-colour-indigo text-white justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-20 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
