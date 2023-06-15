import * as React from "react";
import { ChakraProvider, SimpleGrid } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import { SearchBar } from "./components/SearchBar";
import { SearchResults } from "./components/SearchResults";
import { Playlist } from "./components/Playlist";
import "./App.css";
import { Button } from "spoty-fire-ui";

function App() {
  return (
    <ChakraProvider>
      <Button />
      <NavBar />
      <SearchBar />
      <SimpleGrid
        columns={2}
        spacingX="40px"
        spacingY="20px"
        padding="0 3rem"
        gridTemplateColumns="repeat(auto-fit, minmax(18rem, 1fr))"
      >
        <SearchResults />
        <Playlist />
      </SimpleGrid>
    </ChakraProvider>
  );
}

export default App;
