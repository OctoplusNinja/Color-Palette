import Palette from "./components/Palette/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./utilities/colorHelpers";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Palette palette={generatePalette(seedColors[8])} />
    </div>
  );
}

export default App;
