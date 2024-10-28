import { Button, Card, CardBody, Input } from "@nextui-org/react";
import SearchIcon from "../../SidebarComponents/SearchIcon";
import { Plus } from "lucide-react";
import { useDashboard } from "@/context/useDashboard";
import { Link } from "react-router-dom";

const DiarySearch = () => {
  const { diaries, addDiary } = useDashboard();

  const handleAdd = async () => {
    addDiary("title", "content", "mood", []);
  };

  return (
    <div className="h-screen bg-slate-50 p-4 flex flex-col gap-4">
      <Input label={<SearchIcon />} size="sm" />
      <div className="flex justify-between items-center">
        <p className="text-md font-semibold text-gray-400">My diaries</p>
        <Button isIconOnly variant="light" onClick={handleAdd}>
          <Plus className="text-gray-400" />
        </Button>
      </div>
      <div className="overflow-y-scroll no-scrollbar">
        {diaries
          .sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt))
          .map((diary) => (
            <Link to={`/dashboard/diary/${diary.entryId}`} key={diary.entryId}>
              <Card className="mb-6 shadow-md hover:shadow-xl transition-shadow ease-in-out">
                <CardBody className="overflow-x-hidden">
                  <div className="rounded-lg p-4 transition-all cursor-pointer">
                    <h3 className="text-xl font-semibold text-purple-950">
                      {diary.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {new Date(diary.createdAt).toDateString()}
                    </p>
                    <p className="text-gray-700 mt-2 text-ellipsis overflow-hidden whitespace-nowrap">
                      {diary.content}
                    </p>
                    <div className="mt-4 text-colour-indigo font-medium">
                      {diary.mood}
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default DiarySearch;
