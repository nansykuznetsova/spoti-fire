import { createAsyncThunk } from "@reduxjs/toolkit";
import { ACCESS_TOKEN_KEY, CODE_VERIFIER_KEY } from "../../utils/constants";

export const fetchProfileThunk = createAsyncThunk("profile/fetch", async () => {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);

  if (accessToken) {
    const response = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return await response.json();
  }

  return {};
});

export const logoutUserThunk = createAsyncThunk("profile/clear", () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(CODE_VERIFIER_KEY);

  window.location.href = "/";
});
