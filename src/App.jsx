import Palette from "./components/Palette/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./utilities/colorHelpers";
import "./App.css";

function App() {
  console.log(generatePalette(seedColors[4]));
  return (
    <div className="App">
      <Palette {...seedColors[8]} />
    </div>
  );
}

export default App;
