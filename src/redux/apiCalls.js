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
import userSlice from "./userSlice";
// import { updateStart, updateSuccess, updateError } from "./userSlice";

export const getUser = async (dispatch) => {
//   dispatch(updateStart());
  try {
    const res = await axios.get(
      "https://63878fb8d9b24b1be3f44043.mockapi.io/users/1"  
    );
    console.log(res.data);
dispatch(userSlice(res.data))
    return res.data
  } catch (err) {
    // dispatch(updateError());
  }
};
