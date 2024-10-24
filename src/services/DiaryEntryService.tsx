import axiosInstance from "@/helpers/AxiosInstance";
import { DiaryEntryGet } from "@/models/DiaryEntry";

export const GetDiaryEntriesAPI = async () => {
  const data = await axiosInstance.get<DiaryEntryGet[]>(
    "/diaryEntry/user-diary"
  );
  console.log(data);
  return data;
};
