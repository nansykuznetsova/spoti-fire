import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../features/profile/profileSlice";
import tracksReducer from "../features/search/searchSlice";
import playlistReducer from "../features/playlists/playlistSlice";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    tracks: tracksReducer,
    playlists: playlistReducer
  },
});
