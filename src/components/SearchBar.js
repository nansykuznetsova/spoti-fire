import React from "react";
import { Input, IconButton, Flex } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";
import { searchTracksThunk } from "../features/search/searchThunks";

export const SearchBar = () => {
  const dispatch = useDispatch();

  const [searchTrack, setSearchTrack] = React.useState('');
  const handleChange = (event) => setSearchTrack(event.target.value);

  const handleSearchButton = () => {
    if (searchTrack !== '') {
      dispatch(searchTracksThunk(searchTrack));
    }
  }

  return (
    <div className="searchBar">
      <Flex minWidth="max-content" alignItems="center" gap="5">
        <Input
          placeholder="Search track"
          size="lg"
          h="10"
          borderColor="#ff5555"
          borderStyle="solid"
          borderWidth="thick"
          focusBorderColor="#c03232"
          onChange={handleChange}
          value={searchTrack}
        />
        <IconButton
          onClick={handleSearchButton}
          aria-label="Search database"
          backgroundColor="#ffc8c8"
          icon={<SearchIcon />}
        />
      </Flex>
    </div>
  );
};
