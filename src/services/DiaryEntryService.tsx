import axiosInstance from "@/helpers/AxiosInstance";
import { DiaryEntryGet } from "@/models/DiaryEntry";

export const GetDiaryEntriesAPI = async () => {
  const data = await axiosInstance.get<DiaryEntryGet[]>(
    "/diaryEntry/user-diary"
  );
  console.log(data);
  return data;
};

export const GetDiaryEntryByIdAPI = async (id: number) => {
  const data = await axiosInstance.get<DiaryEntryGet>(`/diaryEntry/${id}`);
  console.log(data);
  return data;
};

export const PutDiaryEntryByIdAPI = async (
  id: number,
  title: string,
  content: string,
  mood: string,
  updatedAt: Date,
  tags: number[]
) => {
  const data = await axiosInstance.put<DiaryEntryGet>(`/diaryEntry/${id}`, {
    title,
    content,
    mood,
    updatedAt,
    tags,
  });
  console.log(data);
  return data;
};

export const DeleteDiaryEntryByIdAPI = async (id: number) => {
  const data = await axiosInstance.delete<DiaryEntryGet>(`/diaryEntry/${id}`);
  console.log(data);
  return data;
};

export const PostDiaryEntryAPI = async (
  title: string,
  content: string,
  mood: string,
  createdAt: Date,
  tags: number[]
) => {
  console.log(title, content, mood, createdAt, tags);

  const data = await axiosInstance.post<DiaryEntryGet>("/diaryEntry", {
    title,
    content,
    mood,
    createdAt,
    tags,
  });
  console.log(data);
  return data;
};
