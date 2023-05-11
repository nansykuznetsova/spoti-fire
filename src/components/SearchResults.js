import React from "react";
import { Container } from "@chakra-ui/react";
import { TrackList } from "./TrackList";
import { selectItems } from "../features/search/searchSelectors";
import { useSelector } from "react-redux";

export const SearchResults = () => {
  const itemsList = useSelector(selectItems);

  return (
    <Container
      backgroundColor="#ffc8c8"
      border="5px #ff5555 solid"
      borderRadius="5px"
    >
      <h2>Results</h2>
      <TrackList 
        list={itemsList} 
        character={true} />
    </Container>
  );
};
