import React from "react";
import styled from "@emotion/styled";

const StyledMiniPalette = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
  & > div {
    background-color: gray;
  }
  & > h5 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    color: black;
    padding-top: 0.5rem;
    font-size: 1rem;
    position: relative;
    & > span {
      margin-left: 0.5rem;
      font-size: 1.5rem;
    }
  }
`;

function MiniPalette(props) {
  const { paletteName, emoji } = props;
  return (
    <StyledMiniPalette>
      <div></div>
      <h5>
        {paletteName} <span>{emoji}</span>
      </h5>
    </StyledMiniPalette>
  );
}

export default MiniPalette;
