import PaletteWrapper from "./components/Palette/PaletteWrapper";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Pallete List Goes here</h1>}></Route>
        <Route path="/palette/:id" element={<PaletteWrapper />}></Route>
      </Routes>
    </div>
  );
}

export default App;
