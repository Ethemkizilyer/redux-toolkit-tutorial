import {
  createSlice,

  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = async (dispatch) => {
  //   dispatch(updateStart());
  try {
    const res = await axios.get(
      "https://63878fb8d9b24b1be3f44043.mockapi.io/users/"
    );
    console.log(res.data);

    dispatch(userSlice(res.data));
    return res.data;
  } catch (err) {
    // dispatch(updateError());
  }
};

export const addUser2 = createAsyncThunk("users/add", async (user) => {
  const res = await axios.post(
    "https://63878fb8d9b24b1be3f44043.mockapi.io/users/",
    user
  );

  return res.data;
});
export const updateUser2 = createAsyncThunk("users/update", async (user) => {
  const res = await axios.put(
    `https://63878fb8d9b24b1be3f44043.mockapi.io/users/${user[0].id}`,
    user[0]
  );

  return res.data;
});

export const deleteUser2 = createAsyncThunk("users/delete", async (user) => {
  const res = await axios.delete(
    `https://63878fb8d9b24b1be3f44043.mockapi.io/users/${user[0].id}`
  );

  return res.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
      name: JSON.parse(localStorage.getItem("user"))?.userInfo.name || "",
      email: JSON.parse(localStorage.getItem("user"))?.userInfo.email || "",
      password:
        JSON.parse(localStorage.getItem("user"))?.userInfo.password || "",
      id: JSON.parse(localStorage.getItem("user"))?.userInfo.id || "",
    },
    pending: null,
    error: false,
  },

  reducers: {
    getUser: (state) => {
      state.pending = true;
    },
    getUser: (state, action) => {
      console.log(action);
      state.pending = false;
      state.userInfo = action.payload;
      localStorage.setItem("user", JSON.stringify(state));
      console.log(state);
    },
    getUser: (state) => {
      state.error = true;
      state.pending = null;
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
    [addUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [addUser2.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
      localStorage.setItem("user", JSON.stringify(state));
    },
    [addUser2.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [updateUser2.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser2.fulfilled]: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
      localStorage.setItem("user", JSON.stringify(state));
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
      localStorage.removeItem("user");
    },
    [deleteUser2.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
