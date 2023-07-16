import * as React from "react";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { HeaderBar } from "./components/HeaderBar";
import { ResultContainers } from "./components/ResultContainers/ResultContainers"

function App() {
  return (
    <React.Fragment>
      <HeaderBar />
      <SearchBar />
      <ResultContainers />
    </React.Fragment>
  );
}

export default App;
