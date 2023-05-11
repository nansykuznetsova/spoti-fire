import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACCESS_TOKEN_KEY } from "../../utils/constants";

export const playlistPostThunk = createAsyncThunk(
  "playlist/save",
  async ({ name, trackUris }) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (accessToken) {
      const response = await fetch("https://api.spotify.com/v1/me/playlists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          name: `${name}`,
          public: true,
        }),
      });
      const jsonResponse = await response.json();
      const playlistId = jsonResponse.id;
      if (playlistId) {
        await fetch(
          `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({
              uris: trackUris,
            }),
          }
        );
      }
    }
    return {};
  }
);

export const playlistsListThunk = createAsyncThunk(
  "playlist/list",
  async (userID) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (accessToken) {
      const response = await fetch(
        `https://api.spotify.com/v1/users/${userID}/playlists`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return await response.json();
    }
    return {};
  }
);

export const playlistGetTracksThunk = createAsyncThunk(
  "playlist/tracks",
  async (playlistID) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (accessToken) {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistID}/tracks`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return await response.json();
    }
    return {};
  }
);
