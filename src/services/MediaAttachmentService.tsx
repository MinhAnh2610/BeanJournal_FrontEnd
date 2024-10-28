import axiosInstance from "@/helpers/AxiosInstance";
import { MediaAttachmentGet } from "@/models/MediaAttachment";

export const GetUserMediaAttachmentsAPI = async () => {
  const data = await axiosInstance.get<MediaAttachmentGet[]>(
    "/mediaAttachment/user-media"
  );
  console.log(data);
  return data;
};

export const UpdateMediaAttachmentsAPI = async (
  entryId: number,
  mediaAttachmentList: File[]
) => {
  const data = await axiosInstance.put<MediaAttachmentGet[]>(
    `/mediaAttachment/${entryId}/media`,
    {
      mediaAttachmentList,
    }
  );
  console.log(data);
  return data;
};
