import React from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { addTrack, deleteTrack } from "../features/playlists/playlistSlice";
import { selectNewPlaylist } from "../features/playlists/playlistSelector";

export const Track = ({
  item,
  title,
  artists,
  album,
  trackActionCharacter,
}) => {
  const dispatch = useDispatch();
  const newPlaylist = useSelector(selectNewPlaylist);

  const handleAddTrack = () => {
    if (!newPlaylist.some((track) => track.id === item.id)) {
      dispatch(addTrack(item));
    }
  };

  const handleDeleteTrack = () => {
    dispatch(deleteTrack(item.id));
  };

  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      justifyContent="space-between"
      borderBottom="3px #fff solid"
      padding="1rem 0"
    >
      <Flex flexDirection="column" justifyContent="center">
        <h3>{title}</h3>
        <p>
          {artists.map((artist) => artist.name).join(", ")} | {album}
        </p>
      </Flex>
      <IconButton
        aria-label="Add/Delete Track"
        backgroundColor="#fff"
        icon={
          trackActionCharacter ? (
            <AddIcon onClick={handleAddTrack} />
          ) : (
            <DeleteIcon onClick={handleDeleteTrack} />
          )
        }
      />
    </Flex>
  );
};
