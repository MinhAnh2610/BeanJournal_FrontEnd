import { handleError } from "@/helpers/ErrorHandler";
import { TagGet } from "@/models/Tag";
import axios from "axios";

const api = "https://beanjournal.azurewebsites.net/api/tag/";

export const getTagsAPI = async () => {
  try {
    const data = await axios.get<TagGet[]>(api);
    console.log(data);
    return data;
  } catch (error) {
    handleError(error);
  }
};
