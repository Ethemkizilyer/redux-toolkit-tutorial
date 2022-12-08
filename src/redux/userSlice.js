import { createSlice, configureStore } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {
    //   name: JSON.parse(localStorage.getItem("user"))?.userInfo.name || "",
    //   email: JSON.parse(localStorage.getItem("user"))?.userInfo.email || "",
        name:"Ethem",
        email: "ethem@gmail.com",
    },
    pending: false,
    error: false,
  },

  reducers: {
    updateStart: (state) => {
      state.pending = true;
    },
    updateSuccess: (state, action) => {
      state.pending = false;
      state.userInfo = action.payload;
      localStorage.setItem("user", JSON.stringify(state));
    },
    updateError: (state) => {
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
});

export const { updateStart, updateSuccess, updateError } = userSlice.actions;
export default userSlice.reducer;
