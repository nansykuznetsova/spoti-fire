import { createSlice } from "@reduxjs/toolkit";
import { searchTracksThunk } from "./searchThunks";

const initialState = {
  items: [],
};

export const tracksSlice = createSlice({
  name: "tracks",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(searchTracksThunk.fulfilled, (state, action) => {
      state.items = action.payload?.tracks?.items;
    });
  },
});

export default tracksSlice.reducer;
