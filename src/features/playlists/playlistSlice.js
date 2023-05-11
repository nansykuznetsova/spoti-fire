import { createSlice } from "@reduxjs/toolkit";
import {
  playlistPostThunk,
  playlistsListThunk,
  playlistGetTracksThunk,
} from "./playlistThunk";

const initialState = {
  namePlaylist: "",
  newPlaylist: [],
  playlistsList: [],
};

export const playlistSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    addTrack: (state, action) => {
      state.newPlaylist = [...state.newPlaylist, action.payload];
    },
    deleteTrack: (state, action) => {
      state.newPlaylist = state.newPlaylist.filter(
        (track) => track.id !== action.payload
      );
    },
    namePlaylist: (state, action) => {
      state.namePlaylist = action.payload;
    },
    clearForm: (state) => {
      state.newPlaylist = [];
      state.namePlaylist = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(playlistPostThunk.fulfilled, (state) => {
      state.newPlaylist = [];
      state.namePlaylist = "";
    });
    builder.addCase(playlistsListThunk.fulfilled, (state, action) => {
      state.playlistsList = action.payload;
    });
    builder.addCase(playlistGetTracksThunk.fulfilled, (state, action) => {
      state.newPlaylist = action.payload.items.map((item) => item.track);
    });
  },
});

export const { addTrack, deleteTrack, namePlaylist, clearForm } =
  playlistSlice.actions;
export default playlistSlice.reducer;
