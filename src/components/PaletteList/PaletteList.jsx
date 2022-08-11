import React, { Component } from "react";
import MiniPalette from "../MiniPalette/MiniPalette";
import styled from "@emotion/styled";

const StyledPaletteList = styled.div`
  background-color: blue;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  & > .container {
    width: 50%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
    & > nav {
      display: flex;
      width: 100%;
      justify-content: space-between;
      color: white;
    }
    & > .palettes {
      box-sizing: border-box;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 30%);
      grid-gap: 5%;
    }
  }
`;

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <StyledPaletteList>
        <div className="container">
          <nav>
            <h1>React Colors</h1>
          </nav>
          <div className="palettes">
            {palettes.map((palette) => (
              <MiniPalette key={palette.id} {...palette} />
            ))}
          </div>
        </div>
      </StyledPaletteList>
    );
  }
}

export default PaletteList;
