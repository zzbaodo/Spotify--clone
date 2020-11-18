import React,{useContext} from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import "./Header.css";
import PlayerContext from '../../../../context/player/playerContext'


const Header = () => {
    const playerContext = useContext(PlayerContext);
    const {player} = playerContext
  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header__right">
        <Avatar src={player.user?.images[0]?.url} alt="" />
  <h4>{player.user?.display_name}</h4>
      </div>
    </div>
  );
};

export default Header;
