import { toast } from "react-hot-toast/src/core/toast";

export const toastKit = (loadingText = "ε¦ηδΈ­...", { icon = "π€" } = {}) => {
  const id = toast.loading(loadingText, {
    icon,
  });

  const errorToast = (errorText = "γ¨γ©γΌγηΊηγγΎγγ", { duration = 4000, icon = "π±" } = {}) => {
    return toast.error(errorText, {
      id,
      icon,
      duration,
    });
  };

  const successToast = (successText: string, { duration = 2000, icon = "π₯³" } = {}) => {
    return toast.success(successText, {
      id,
      icon,
      duration,
    });
  };

  return { errorToast, successToast };
};
