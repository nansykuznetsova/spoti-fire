import React from "react";
import styles from './SearchResults.module.css';
import { TrackList } from "../TrackList";
import { selectItems } from "../../features/search/searchSelectors";
import { useSelector } from "react-redux";
import { Box } from "spoty-fire-ui";

export const SearchResults = () => {
  const itemsList = useSelector(selectItems);

  return (
    <Box primary={false}>
      <h2 className={styles.trackListLabel}>
        Results
      </h2>
      {itemsList && itemsList.length > 0 &&
        <TrackList
          list={itemsList}
          actionLabel='Add'
        />
      }
    </Box>
  );
};
