import React from "react";
import { List, ListItem } from "spoty-fire-ui";
import {addTrack, deleteTrack} from "../features/playlists/playlistSlice";
import {useDispatch, useSelector} from "react-redux";
import {selectNewPlaylist} from "../features/playlists/playlistSelector";

export const TrackList = (props) => {
  const { list, actionLabel } = props;
  const dispatch = useDispatch();
  const newPlaylist = useSelector(selectNewPlaylist);
  
  const handleAddTrack = (item) => {
    if (!newPlaylist.some((track) => track.id === item.id)) {
      dispatch(addTrack(item));
    }
  };
  
  const handleDeleteTrack = (item) => {
    dispatch(deleteTrack(item.id));
  };
  
  return (
    <List>
      {list.map((item) => (
        <ListItem
          item={item}
          key={item.id}
          title={item.name}
          artists={item.artists}
          album={item.album.name}
          img={item.album.images[0]}
          actionLabel={actionLabel}
          onClick={
            actionLabel === 'Add' ? handleAddTrack : handleDeleteTrack}
        >
          {item.label}
        </ListItem>
      ))}
    </List>
  );
};
