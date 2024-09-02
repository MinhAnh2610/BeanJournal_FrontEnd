import { isAxiosError } from "axios";
import { toast } from "sonner";

export const handleError = (error: any) => {
  if (isAxiosError(error)) {
    var err = error.response;
    if (Array.isArray(err?.data.errors)) {
      for (let val of err?.data.errors) {
        toast.error(val.message);
      }
    } else if (typeof err?.data.errors === "object") {
      for (let e in err?.data.errors) {
        toast.error(err?.data.errors[e][0]);
      }
    } else if (err?.status == 401) {
      toast.error("Please login");
      window.history.pushState({}, "LoginPage", "/login");
    } else if (err) {
      toast.error(err?.data);
    }
  }
};
