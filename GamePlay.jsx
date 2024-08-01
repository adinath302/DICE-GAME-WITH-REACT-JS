import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";

function GamePlay() {
  return (
    <MainContainer>
      <div className="Top_section">
        <TotalScore />
        <NumberSelector />
      </div>
    </MainContainer>
  );
}

export default GamePlay;

const MainContainer = styled.main`
  .Top_section {
    display: flex;
    justify-content: space-around;
  }
`;
