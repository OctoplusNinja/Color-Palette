import Palette from "./components/Palette/Palette";
import seedColors from "./seedColors";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[8]} />
    </div>
  );
}

export default App;
