import { createSlice, configureStore } from "@reduxjs/toolkit";


export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: JSON.parse(localStorage.getItem("user")).name || "",
    email: JSON.parse(localStorage.getItem("user")).email || "",
  },
  reducers: {
    update: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      localStorage.setItem("user", JSON.stringify(state));
    },
  },
});

export const {update}= userSlice.actions
export default userSlice.reducer;