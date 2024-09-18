import { handleError } from "@/helpers/ErrorHandler";
import axios from "axios";

const api = "https://beanjournal.azurewebsites.net/api/mediaAttachment/";

export const GetUserMediaAttachmentsAPI = async () => {
  try {
    const data = await axios.get(api + "user-media");
    console.log(data);
    return data;
  } catch (error) {
    handleError(error);
  }
};
