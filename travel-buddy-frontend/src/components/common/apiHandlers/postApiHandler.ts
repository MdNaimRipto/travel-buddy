import {
  IApiErrorResponse,
  IApiSuccessResponse,
} from "@/types/apiResponseTypes";
import { SuccessToast } from "../toasts/SuccessToast";
import { ErrorToast } from "../toasts/ErrorToast";

export const postApiHandler = async ({
  mutateFn,
  options,
  setIsLoading,
  optionalTasksFn,
}: {
  mutateFn: any;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  options: any;
  optionalTasksFn?: any;
}) => {
  try {
    setIsLoading(true);

    const res: IApiSuccessResponse = await mutateFn(options).unwrap();
    if (res.success === true) {
      SuccessToast(res.message);
      if (optionalTasksFn) {
        optionalTasksFn();
      }
    }
  } catch (e) {
    console.log("error", e);
    const error = e as IApiErrorResponse;

    const errorMessage = error?.data?.message || "An unknown error occurred!";
    ErrorToast(errorMessage);
  } finally {
    setIsLoading(false);
  }
};

/***
 * Example
 * await postApiHandler({
      mutateFn: uploadBook,
      options: option,
      setIsLoading: setIsLoading,
      optionalTasksFn: optionalTasks,
    });
 * **/
