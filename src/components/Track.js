import React from "react";
import { Flex, IconButton } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";

export const Track = () => {
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
        <h3>Track Title</h3>
        <p>Artist | Album</p>
      </Flex>
      <IconButton
        aria-label="Add Track"
        backgroundColor="#fff"
        icon={<AddIcon />}
      />
      {/* add functionin case <AddIcon /> <SearchResults/> */}
      {/* add function for <DeleteIcon /> in case <Playlist /> */}
    </Flex>
  );
};
