import React, { useContext, useEffect } from "react";
import "./Player.css";
import PlayerContext from "../../context/player/playerContext";
import Sidebar from "./sidebar/Sidebar";
import Body from "./body/Body";
import Footer from "./footer/Footer";


const Player = () => {
  const playerContext = useContext(PlayerContext);
  const { setUser, setToken,setPlayList,player } = playerContext;
  useEffect(() => {
    setToken();
    setUser();
    // spotify.setAccessToken(player.token)
    
    //eslint-disable-next-line
  }, []);

  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
