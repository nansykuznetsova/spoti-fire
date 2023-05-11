import React from "react";
import { Container } from "@chakra-ui/react";
import { TrackList } from "./TrackList";

export const SearchResults = () => {
  return (
    <Container
      backgroundColor="#ffc8c8"
      border="5px #ff5555 solid"
      borderRadius="5px"
      height="25rem"
    >
      <h2>Results</h2>
      <TrackList />
    </Container>
  );
};
