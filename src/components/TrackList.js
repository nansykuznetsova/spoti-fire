import React from "react";
import { Track } from "./Track";

import { ListItem, List } from "@chakra-ui/react";

export const TrackList = (props) => {
  const { list, character} = props;

  return (
    <React.Fragment>
      <List>
        {list.map((item) => (
          <ListItem key={item.id}>
            <Track
              item={item}
              title={item.name}
              artists={item.artists}
              album={item.album.name}
              trackActionCharacter={character}
            />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};
