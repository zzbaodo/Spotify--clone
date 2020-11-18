import React, { useContext, useEffect } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import PlayerContext from "../../../context/player/playerContext";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();

const Sidebar = () => {
  const playerContext = useContext(PlayerContext);
  const { player, setPlayList } = playerContext;

  useEffect(() => {
    spotify.getUserPlaylists().then((playlist) => {
      setPlayList(playlist);
    });
  }, []);

  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify logo"
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your library" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLIST</strong>
      <hr />
      <div>
        {player.playlists.items &&
          player.playlists.items.map((playlist) => (
            <SidebarOption title={playlist.name} key={playlist.name} />
          ))}
      </div>
    </div>
  );
};

export default Sidebar;
