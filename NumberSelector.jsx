import React, { useState } from "react";
import styled from "styled-components";
function NumberSelector() {
  const arrrayNo = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setselectedNumber] = useState();

  console.log(selectedNumber);

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {arrrayNo.map((value, i) => (
          <Box
            isselected={value == selectedNumber} // for checking if value is equal to selected number
            key={i}
            onClick={() => setselectedNumber(value)} // for setting selected number on click of box
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
}

export default NumberSelector;

const NumberSelectorContainer = styled.div`
  .flex {
    gap: 24px;
    display: flex;
  }
  p {
    font-size: 24px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) =>
    props.isselected
      ? "black"
      : "white"}; // for checking if value is equal to selected number then black otherwise white
  color: ${(props) => (props.isselected ? "white" : "black")};
`;
