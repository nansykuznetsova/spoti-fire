import { createSlice } from "@reduxjs/toolkit";
import { fetchProfileThunk, logoutUserThunk } from "./profileThunks";

const initialState = {
  id: "",
  email: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProfileThunk.fulfilled, (state, action) => {
      const { id, email } = action.payload;

      state.id = id;
      state.email = email;
    });
    builder.addCase(logoutUserThunk.fulfilled, (state) => {
      state = initialState;
    });
  },
});

export default profileSlice.reducer;
