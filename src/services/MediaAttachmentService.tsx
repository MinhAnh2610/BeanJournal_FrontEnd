import axiosInstance from "@/helpers/AxiosInstance";
import { MediaAttachmentGet } from "@/models/MediaAttachment";

export const GetUserMediaAttachmentsAPI = async () => {
  const data = await axiosInstance.get<MediaAttachmentGet[]>(
    "/mediaAttachment/user-media"
  );
  console.log(data);
  return data;
};
