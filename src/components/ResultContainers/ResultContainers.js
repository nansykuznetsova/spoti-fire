import styles from "./ResultContainers.module.css";
import React from "react";
import {SearchResults} from "../SearchResults/SearchResults";
import {Playlist} from "../PlayList/Playlist";

export const ResultContainers = () => {
  return (
    <div className={styles.resultContainers}>
      <SearchResults />
      <Playlist />
    </div>
    
  );
};
