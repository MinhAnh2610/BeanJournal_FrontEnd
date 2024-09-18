import { handleError } from "@/helpers/ErrorHandler";
import { DiaryEntryGet } from "@/models/DiaryEntry";
import axios from "axios";

const api = "https://beanjournal.azurewebsites.net/api/diaryEntry/";

export const GetDiaryEntriesAPI = async () => {
  try {
    const data = await axios.get<DiaryEntryGet[]>(api + "user-diary");
    console.log(data);
    return data;
  } catch (error) {
    handleError(error);
  }
};
