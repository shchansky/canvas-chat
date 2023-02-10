import styled, { css } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  & > canvas {
    border: 1px solid black;
    background-color: white;
  }
`;
