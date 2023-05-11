import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACCESS_TOKEN_KEY } from "../../utils/constants";

export const searchTracksThunk = createAsyncThunk(
  "search/fetch",
  async (searchTrack) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    const url = `https://api.spotify.com/v1/search?q=${searchTrack}&type=track`;

    if (accessToken) {
      const response = await fetch(url, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return await response.json();
    }

    return {};
  }
);
