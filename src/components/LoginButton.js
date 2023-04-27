import * as React from "react";
import { Button } from "@chakra-ui/react";
import {
  generateRandomString,
  generateCodeChallenge,
  clientID,
} from "../utils/spotifyAPI";
import { ACCESS_TOKEN_KEY, CODE_VERIFIER_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfileThunk, logoutUserThunk } from "../features/profile/profileThunks";
import { selectEmail, selectID } from "../features/profile/profileSelectors";

const REDIRECT_URI = window.location.origin + "/";

export const LoginButton = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);
  const id = useSelector(selectID);

  React.useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code && !accessToken) {
      const codeVerifier = localStorage.getItem(CODE_VERIFIER_KEY);
      const body = new URLSearchParams({
        grant_type: "authorization_code",
        code: code,
        redirect_uri: REDIRECT_URI,
        client_id: clientID,
        code_verifier: codeVerifier,
      });

      fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("HTTP status " + response.status);
          }
          return response.json();
        })
        .then((data) => {
          localStorage.setItem(ACCESS_TOKEN_KEY, data.access_token);
          dispatch(fetchProfileThunk());
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    if (accessToken) {
      dispatch(fetchProfileThunk());
    }
  }, []);

  const handleLogin = () => {
    const codeVerifier = generateRandomString(128);

    generateCodeChallenge(codeVerifier).then((codeChallenge) => {
      const state = generateRandomString(16);
      const scope = "user-read-private user-read-email playlist-modify-public";

      localStorage.setItem(CODE_VERIFIER_KEY, codeVerifier);

      const args = new URLSearchParams({
        response_type: "code",
        client_id: clientID,
        scope: scope,
        redirect_uri: REDIRECT_URI,
        state: state,
        code_challenge_method: "S256",
        code_challenge: codeChallenge,
      });

      window.location = "https://accounts.spotify.com/authorize?" + args;
    });
  };

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <>
      {email}
      {id ? (
        <Button
          backgroundColor="#ff5555"
          color="black"
          margin="16px"
          onClick={handleLogout}
        >
          Log out
        </Button>
      ) : (
        <Button
          backgroundColor="#ff5555"
          color="black"
          margin="16px"
          onClick={handleLogin}
        >
          Log in
        </Button>
      )}
    </>
  );
};
