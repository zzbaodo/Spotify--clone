import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import Login from "./components/login/Login";
import { getTokenFromURL } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/player/Player";
import PlayerContext from "./context/player/playerContext";

const spotify = new SpotifyWebApi();

function App() {
  const playerContext = useContext(PlayerContext);
  const { player, setUser, setPlayList } = playerContext;
  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      localStorage.setItem("token", _token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
      });
    }
  }, []);
  return (
    <div className="app">
      {localStorage.getItem("token") ? <Player /> : <Login />}
    </div>
  );
}

export default App;
