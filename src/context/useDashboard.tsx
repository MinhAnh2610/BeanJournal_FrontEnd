import { DiaryEntryGet } from "@/models/DiaryEntry";
import { TagGet } from "@/models/Tag";
import {
  DeleteDiaryEntryByIdAPI,
  GetDiaryEntriesAPI,
  PostDiaryEntryAPI,
  PutDiaryEntryByIdAPI,
} from "@/services/DiaryEntryService";
import { getTagsAPI } from "@/services/TagService";
import React, { createContext, useLayoutEffect, useState } from "react";
import { toast } from "sonner";

type DashboardContextType = {
  tags: TagGet[];
  diaries: DiaryEntryGet[];
  addDiary: (
    title: string,
    content: string,
    mood: string,
    tags: number[]
  ) => void;
  updateDiaryById: (
    id: number,
    title: string,
    content: string,
    mood: string,
    tags: number[]
  ) => void;
  deleteDiaryById: (id: number) => void;
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

  const addDiary = async (
    title: string,
    content: string,
    mood: string,
    tags: number[]
  ) => {
    await PostDiaryEntryAPI(title, content, mood, new Date(), tags);
    await getDiaries();
  };

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

  const updateDiaryById = async (
    id: number,
    title: string,
    content: string,
    mood: string,
    tags: number[]
  ) => {
    const data = await PutDiaryEntryByIdAPI(
      id,
      title,
      content,
      mood,
      new Date(),
      tags
    );
    await getDiaries();
    return data;
  };

  const deleteDiaryById = async (id: number) => {
    await DeleteDiaryEntryByIdAPI(id);
    await getDiaries();
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
    <DashboardContext.Provider
      value={{
        tags,
        diaries,
        addDiary,
        updateDiaryById,
        deleteDiaryById,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => React.useContext(DashboardContext);
