import axios from "axios";
import userSlice from "./userSlice";


export const getUser = async (dispatch) => {
//   dispatch(updateStart());
  try {
    const res = await axios.get(
      "https://63878fb8d9b24b1be3f44043.mockapi.io/users/"  
    );
    console.log(res.data);
dispatch(userSlice(res.data))
    return res.data
  } catch (err) {
    // dispatch(updateError());
  }
};
