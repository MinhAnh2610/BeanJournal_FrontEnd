import { DiaryEntryGet } from "@/models/DiaryEntry";
import { TagGet } from "@/models/Tag";
import { GetDiaryEntriesAPI } from "@/services/DiaryEntryService";
import { getTagsAPI } from "@/services/TagService";
import React, {
  createContext,
  useLayoutEffect,
  useState,
} from "react";
import { toast } from "sonner";

type DashboardContextType = {
  tags: TagGet[];
  diaries: DiaryEntryGet[];
};

type Props = {
  children: React.ReactNode;
};

const DashboardContext = createContext<DashboardContextType>(
  {} as DashboardContextType
);

export const DashboardProvider = ({ children }: Props) => {
  const [tags, setTags] = useState<TagGet[]>([]);
  const [diaries, setDiaries] = useState<DiaryEntryGet[]>([]);

  const getTags = async () => {
    await getTagsAPI()
      .then((res) => {
        if (res?.data) {
          setTags(res.data);
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  const getDiaries = async () => {
    await GetDiaryEntriesAPI()
      .then((res) => {
        if (res?.data) {
          setDiaries(res.data);
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  useLayoutEffect(() => {
    getTags();
    getDiaries();
  }, []);

  return (
    <DashboardContext.Provider value={{ tags, diaries }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => React.useContext(DashboardContext);
