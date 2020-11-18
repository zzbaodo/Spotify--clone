import React, { useEffect, useContext } from "react";
import "./Body.css";
import Header from "./header/Header";
import SpotifyWebApi from "spotify-web-api-js";
import PlayerContext from "../../../context/player/playerContext";
import { Favorite } from "@material-ui/icons";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from './SongRow'

const spotify = new SpotifyWebApi();

const Body = () => {
  const playerContext = useContext(PlayerContext);
  const { setDiscoverWeekly, player } = playerContext;
  useEffect(() => {
    spotify.getPlaylist("37i9dQZEVXcH8Gf5WN1bov").then((res) => {
      setDiscoverWeekly(res);
    });
  });
  return (
    <div className="body">
      <Header />
      <div className="body__info">
        <img src={player.discoverWeekly?.images[0]?.url} />

        <div className="body__infoText">
          <strong>PlayList</strong>
          <h2>Discover Weekly</h2>
          <p>{player.discoverWeekly?.description}</p>
        </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {player.discoverWeekly?.tracks.items.map(item => (
            <SongRow track ={item.track}/>
        ))}
      </div>
    </div>
  );
};

export default Body;
