import React from "react";
import {
  Container,
  Input,
  Button,
  Alert,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { TrackList } from "./TrackList";
import { useDispatch, useSelector } from "react-redux";
import {
  selectNewPlaylist,
  selectTrackUri,
  selectNamePlaylist,
} from "../features/playlists/playlistSelector";
import { playlistPostThunk } from "../features/playlists/playlistThunk";
import { namePlaylist } from "../features/playlists/playlistSlice";

export const Playlist = () => {
  const [displayAlert, setDisplayAlert] = React.useState("none");
  const dispatch = useDispatch();
  const newPlaylist = useSelector(selectNewPlaylist);
  const trackUris = useSelector(selectTrackUri);
  const name = useSelector(selectNamePlaylist);
  const timeout = React.useRef();

  const handleChange = (event) => {
    dispatch(namePlaylist(event.target.value));
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
    <Container
      backgroundColor="#ffc8c8"
      border="5px #ff5555 solid"
      borderRadius="5px"
    >
      <Input
        placeholder="Name your Playlist"
        size="lg"
        marginTop="1rem"
        fontSize="2rem"
        textAlign="center"
        borderColor="#ffc8c8"
        onChange={handleChange}
        value={name}
        focusBorderColor="#ff5555"
      />
      <Button
        backgroundColor="#ff5555"
        color="black"
        display="block"
        margin="16px auto"
        onClick={handleAddPlaylist}
      >
        SAVE TO SPOTIFY
      </Button>
      <Alert status="success" display={displayAlert}>
        <AlertIcon />
        <AlertTitle display="inline-block">
          Your playlist has been saved!
        </AlertTitle>
      </Alert>
      <TrackList list={newPlaylist} character={false} />
    </Container>
  );
};
