import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";

import SpotifyWebApi from "spotify-web-api-js";

import { getTokenFromUrl } from "./spotify";

const spotify = new SpotifyWebApi();

const App = () => {
  const [token, setToken] = useState(null);

  // Run code baased on given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        console.log(user);
      });
    }

    console.log("I have a token>>>", token);
  }, []);

  return (
    <div className="app">{token ? <h1>I am logged in</h1> : <Login />}</div>
  );
};

export default App;

// 9d7de7fea7ce4f719a271a57d0ba7916
