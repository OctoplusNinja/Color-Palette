import React from "react";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const StyledMiniPalette = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  /* overflow: hidden; */
  &:hover {
    cursor: pointer;
  }
  & > div {
    background-color: #dae1d4;
    height: 150px;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
    & > .miniColor {
      height: 25%;
      width: 20%;
      display: inline-block;
      margin: 0 auto;
      position: relative;
    }
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
  let navigate = useNavigate();
  const { paletteName, emoji, colors, id } = props;
  function handleClick() {
    navigate(`/palette/${id}`);
  }
  const miniColorBoxes = colors.map((color) => (
    <div
      className="miniColor"
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></div>
  ));
  return (
    <StyledMiniPalette onClick={handleClick}>
      <div>{miniColorBoxes}</div>
      <h5>
        {paletteName} <span>{emoji}</span>
      </h5>
    </StyledMiniPalette>
  );
}

export default MiniPalette;
