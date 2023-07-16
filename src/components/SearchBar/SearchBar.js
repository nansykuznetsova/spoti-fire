import React from "react";
import styles from "./SearchBar.module.css";
import { Field, Select} from "spoty-fire-ui";
import {useDispatch, useSelector} from "react-redux";
import { searchTracksThunk } from "../../features/search/searchThunks";
import {selectID} from "../../features/profile/profileSelectors";
import {selectPlaylists} from "../../features/playlists/playlistSelector";
import {playlistGetTracksThunk, playlistsListThunk} from "../../features/playlists/playlistThunk";
import {namePlaylist} from "../../features/playlists/playlistSlice";


export const SearchBar = () => {
  const [playlistID, setPlaylistID] = React.useState("");
  
  const dispatch = useDispatch();
  const userID = useSelector(selectID);
  const playlists = useSelector(selectPlaylists);
  const handleChange = (value) => {
    dispatch(searchTracksThunk(value));
  };
  
  React.useEffect(() => {
    if (userID) {
      dispatch(playlistsListThunk(userID));
    }
  }, [userID]);
  
  React.useEffect(() => {
    if (playlistID) {
      dispatch(playlistGetTracksThunk(playlistID));
      const name = playlists.find(
        (playlist) => playlist.id === playlistID
      ).name;
      dispatch(namePlaylist(name));
    }
  }, [playlistID]);
  
  const handlePlaylistOption = (item) => {
    setPlaylistID(item.id);
  };

  return (
    <div className={styles.searchContainer}>
      <div className={styles.selectContainer}>
        <Select
          label="Select your playlist"
          options={playlists}
          onChange={handlePlaylistOption}
        />
      </div>
      <div className={styles.fieldContainer}>
        <Field
          onChange={handleChange}
          label="Search track"
          type="search"
        />
      </div>
    </div>
  );
};
