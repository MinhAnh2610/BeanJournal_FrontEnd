import { axiosInstance } from "@/helpers/AxiosInstance";
import { handleError } from "@/helpers/ErrorHandler";

export const GetUserMediaAttachmentsAPI = async () => {
  try {
    const data = await axiosInstance.get("/mediaAttachment/user-media");
    console.log(data);
    return data;
  } catch (error) {
    handleError(error);
  }
};
