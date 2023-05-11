import React from "react";
import { Select } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { selectID } from "../features/profile/profileSelectors";
import {
  playlistsListThunk,
  playlistGetTracksThunk,
} from "../features/playlists/playlistThunk";
import { selectPlaylists } from "../features/playlists/playlistSelector";
import { namePlaylist } from "../features/playlists/playlistSlice";

function renderOptions(playlistsArray) {
  return playlistsArray.map((item) => {
    return (
      <option key={item.id} value={item.id}>
        {item.name}
      </option>
    );
  });
}

export const PlaylistsList = () => {
  const [playlistID, setPlaylistID] = React.useState("");

  const dispatch = useDispatch();
  const userID = useSelector(selectID);
  const playlists = useSelector(selectPlaylists);

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

  const handlePlaylistOption = (event) => {
    setPlaylistID(event.target.value);
  };

  return (
    <Select
      placeholder="Select Playlist"
      borderColor="#ff5555"
      focusBorderColor="#c03232"
      onChange={handlePlaylistOption}
    >
      {playlists ? renderOptions(playlists) : undefined}
    </Select>
  );
};
