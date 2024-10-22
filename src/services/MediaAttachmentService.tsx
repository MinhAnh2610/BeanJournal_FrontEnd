import axiosInstance from "@/helpers/AxiosInstance";
import { handleError } from "@/helpers/ErrorHandler";
import { MediaAttachmentGet } from "@/models/MediaAttachment";

export const GetUserMediaAttachmentsAPI = async () => {
  try {
    const data = await axiosInstance.get<MediaAttachmentGet[]>("/mediaAttachment/user-media");
    console.log(data);
    return data;
  } catch (error) {
    handleError(error);
  }
};
