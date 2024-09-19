import { handleError } from "@/helpers/ErrorHandler";
import { axiosInstance } from "@/helpers/AxiosInstance";
import { TagGet } from "@/models/Tag";

export const getTagsAPI = async () => {
  try {
    const data = await axiosInstance.get<TagGet[]>("/tag/");
    console.log(data);
    return data;
  } catch (error) {
    handleError(error);
  }
};
