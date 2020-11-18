import {
  SET_USER,
  SET_TOKEN,
  SET_PLAYLIST,
  SET_DISCOVER_WEEKLY,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_PLAYLIST:
      return {
        ...state,
        playlists: action.payload,
        loading: false,
      };
    case SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discoverWeekly: action.payload,
      };
    default:
      return state;
  }
};
