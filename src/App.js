import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";

import SpotifyWebApi from "spotify-web-api-js";

import { getTokenFromUrl } from "./spotify";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

const App = () => {
  const [{ user, token }, dispatch] = useDataLayerValue();

  // Run code baased on given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZF1DX9tPFwDMOaN1").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
};

export default App;

// spotify.js redirectUri 要記得改成localhost:3000
// developer.spotify.com 的 Edit Settings 要記得更改 Redirect URIs 成 https://spotify-clone-app-a13de.web.app/
// 9d7de7fea7ce4f719a271a57d0ba7916
