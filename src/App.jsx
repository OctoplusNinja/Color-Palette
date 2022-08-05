import PaletteWrapper from "./components/Palette/PaletteWrapper";
import PaletteList from "./components/PaletteList/PaletteList";
import seedColors from "./seedColors";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaletteList palettes={seedColors} />}></Route>
        <Route path="/palette/:id" element={<PaletteWrapper />}></Route>
      </Routes>
    </div>
  );
}

export default App;
