import React from "react";
import {
  Box,
  Field,
  Button,
  Alert
} from "spoty-fire-ui";
import { TrackList } from "../TrackList";
import styles from './PlayList.module.css';
import { useDispatch, useSelector } from "react-redux";
import {
  selectNewPlaylist,
  selectTrackUri,
  selectNamePlaylist,
} from "../../features/playlists/playlistSelector";
import { playlistPostThunk } from "../../features/playlists/playlistThunk";
import { namePlaylist } from "../../features/playlists/playlistSlice";

export const Playlist = () => {
  const [displayAlert, setDisplayAlert] = React.useState("none");
  const dispatch = useDispatch();
  const newPlaylist = useSelector(selectNewPlaylist);
  const trackUris = useSelector(selectTrackUri);
  const name = useSelector(selectNamePlaylist);
  const timeout = React.useRef();

  const handleChange = (value) => {
    dispatch(namePlaylist(value));
  };

  const savePlaylistAlert = () => {
    setDisplayAlert("inline-block");
    timeout.current = setTimeout(() => {
      setDisplayAlert("none");
    }, 3000);
  };

  React.useEffect(
    () => () => {
      clearTimeout(timeout.current);
    },
    []
  );

  const handleAddPlaylist = () => {
    dispatch(
      playlistPostThunk({
        name,
        trackUris,
      })
    );
    savePlaylistAlert();
  };

  return (
    <Box primary={false}>
      <Field
        onChange={handleChange}
        label="Name your Playlist"
        type="text"
      />
      <div className={styles.buttonSaveSpotify}>
        <Button
          variant='outlined'
          label='SAVE TO SPOTIFY'
          onClick={handleAddPlaylist}
        />
      </div>
      { displayAlert === "inline-block" &&
        <Alert
          status='success'
          text='Your playlist has been saved!'
        />
      }
      <TrackList
        list={newPlaylist}
        actionLabel='Remove'
      />
    </Box>
  );
};