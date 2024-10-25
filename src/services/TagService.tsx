import axiosInstance from "@/helpers/AxiosInstance";
import { TagGet } from "@/models/Tag";

export const getTagsAPI = async () => {
  const data = await axiosInstance.get<TagGet[]>("/tag");
  console.log(data);
  return data;
};
