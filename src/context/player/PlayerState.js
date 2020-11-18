import React, { useReducer } from "react";
import PlayerContext from "./playerContext";
import playerReducer from "./PlayerReducer";
import {
  SET_USER,
  SET_TOKEN,
  SET_PLAYLIST,
  SET_DISCOVER_WEEKLY,
} from "../types";

const PlayerState = (props) => {
  const initState = {
    user: null,
    playlists: [],
    playing: null,
    item: null,
    loading: true,
  };
  const [state, dispatch] = useReducer(playerReducer, initState);
  // ACTIONS
  //Set user
  const setUser = (user) => {
    const userFromLocal = JSON.parse(localStorage.getItem("user"));

    dispatch({
      type: SET_USER,
      payload: userFromLocal ? userFromLocal : user,
    });
  };
  // Set Token
  const setToken = () => {
    dispatch({
      type: SET_TOKEN,
      payload: localStorage.getItem("token"),
    });
  };
  //Set playlist
  const setPlayList = (playlist) => {
    dispatch({
      type: SET_PLAYLIST,
      payload: playlist,
    });
  };
  //Set Discover Weekly
  const setDiscoverWeekly = (data) => {
    dispatch({
      type: SET_DISCOVER_WEEKLY,
      payload: data,
    });
  };
  return (
    <PlayerContext.Provider
      value={{
        player: state,
        setUser,
        setToken,
        setPlayList,
        setDiscoverWeekly
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerState;
