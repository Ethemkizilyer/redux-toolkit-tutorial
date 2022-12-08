// import axios from "axios";
// import { updateError, updateStart, updateSuccess } from "./userSlice";

// export const updateUser = async (user, dispatch) => {
//   dispatch(updateStart());
//   try {
//     const res = await axios.post(
//       `https://63878fb8d9b24b1be3f44043.mockapi.io/users/`
//     );
//     dispatch(updateSuccess(res.data));
//   } catch (error) {
//     dispatch(updateError());
//   }
// };

import axios from "axios";
import { updateStart, updateSuccess, updateError } from "./userSlice";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post(
      "https://63878fb8d9b24b1be3f44043.mockapi.io/users/",
      user
    );
    dispatch(updateSuccess(res.data));
  } catch (err) {
    dispatch(updateError());
  }
};
