import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/Rowpost/RowPost";
import { action,comedy,documantaries,horror,orginals, romance } from "./Components/Url";


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Banner/>
        <RowPost url={orginals} title='Netflix Orginals' />
        <RowPost url={action} title='Action Movies' isSmall />
        <RowPost url={comedy} title='Comedy Movies' isSmall />
        <RowPost url={horror} title='Horror Movies' isSmall />
        <RowPost url={romance} title='Romantic Movies' isSmall />
        <RowPost url={documantaries} title='Documantaries' isSmall />

    </div>
  );
}

export default App;
