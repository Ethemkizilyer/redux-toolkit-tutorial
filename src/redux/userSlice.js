import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";





export const getUser = async (dispatch) => {
  //   dispatch(updateStart());
  try {
    const res = await axios.get(
      "https://63878fb8d9b24b1be3f44043.mockapi.io/users/1"
    );
    console.log(res.data);
    userSlice(res.data);
    dispatch(updateUser2(res.data))
    return res.data;
  } catch (err) {
    // dispatch(updateError());
  }
};


export const addUser2=createAsyncThunk("users/update",async(user)=>{
    const res = await axios.post(
      "https://63878fb8d9b24b1be3f44043.mockapi.io/users/",user);
      getUser();
      return res.data
})
export const updateUser2=createAsyncThunk("users/update",async(user)=>{
    const res = await axios.put(
      "https://63878fb8d9b24b1be3f44043.mockapi.io/users/1",user);
      getUser();
      return res.data
})
export const deleteUser2=createAsyncThunk("users/delete",async(user)=>{
    const res = await axios.delete(
      "https://63878fb8d9b24b1be3f44043.mockapi.io/users/1",user);
      getUser();
      return res.data
})

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      //   name: JSON.parse(localStorage.getItem("user"))?.userInfo.name || "",
      //   email: JSON.parse(localStorage.getItem("user"))?.userInfo.email || "",
      name: "",
      email: "",
    },
    pending: null,
    error: false,
  },

  reducers: {
    getUser: (state) => {
      state.pending = true;
    },
    getUser: (state, action) => {
        console.log(action)
      state.pending = false;
      state.userInfo = action.payload;
      localStorage.setItem("user", JSON.stringify(state));
    },
    getUser: (state) => {
      state.error = true;
      state.pending = false;
    },
    // update: (state, action) => {
    //   state.name = action.payload.name;
    //   state.email = action.payload.email;
    //   localStorage.setItem("user", JSON.stringify(state));
    // },
    // remove: (state, action) => {
    //   state.name = "";
    //   state.email = "";
    //   localStorage.setItem("user", JSON.stringify({}));
    // },
  },
  extraReducers: {
    [updateUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser2.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    [updateUser2.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [deleteUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [deleteUser2.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
    },
    [deleteUser2.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
