import { useParams } from "react-router-dom";
import Palette from "./Palette";
import { generatePalette } from "../../utilities/colorHelpers";
import seedColors from "../../seedColors";

const findPalette = (id) => seedColors.find((palette) => palette.id === id);

const PaletteWrapper = () => {
  const { id } = useParams();
  return <Palette palette={generatePalette(findPalette(id))} />;
};

export default PaletteWrapper;
