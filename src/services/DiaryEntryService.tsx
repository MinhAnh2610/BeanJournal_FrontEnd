import { handleError } from "@/helpers/ErrorHandler";
import axiosInstance from "@/helpers/AxiosInstance";
import { DiaryEntryGet } from "@/models/DiaryEntry";

export const GetDiaryEntriesAPI = async () => {
  try {
    const data = await axiosInstance.get<DiaryEntryGet[]>("/diaryEntry/user-diary");
    console.log(data);
    return data;
  } catch (error) {
    handleError(error);
  }
};
