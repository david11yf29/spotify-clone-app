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
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
};

export default App;

// 9d7de7fea7ce4f719a271a57d0ba7916
