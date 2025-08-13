import { toast } from "react-toastify";

export const handleApiError = (error: any, context?: string) => {
  let message = `An unexpected error occurred: ${context} ${error}`;

  toast.error(message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
