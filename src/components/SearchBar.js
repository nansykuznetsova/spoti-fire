import React from "react";
import { Input, IconButton, Flex } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const handleChange = (event) => setSearchTerm(event.target.value);

  const handleSearchButton = () => {
    const url = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`;
    
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
          onChange={handleChange}
          value={searchTerm}
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
