// import axios from "axios"
// import { toast} from "react-toastify"

// const CatchError = (err: unknown) => {

//     if (axios.isAxiosError(err))  // server side Error
//         return toast.error(err.response?.data.Message)

//     if (err instanceof Error) // frontend side Error
//         return toast.error(err.message)

//     return toast.error("Network error")
// }

// export default CatchError



import axios from "axios";
import { toast } from "react-toastify";

const CatchError = (err: unknown) => {
  if (axios.isAxiosError(err)) {
    return toast.error(
      err.response?.data?.message ||
      err.response?.data?.Message ||
      err.message
    );
  }

  if (err instanceof Error) {
    return toast.error(err.message);
  }

  return toast.error("Network Error");
};

export default CatchError;