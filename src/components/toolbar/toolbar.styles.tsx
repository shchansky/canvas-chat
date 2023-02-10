import styled from "styled-components";

export const Container = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position: absolute;
  width: 100%;
  box-shadow: 0 4px 5px gray;
  z-index: 99;
`;

export const Button = styled.button`
  cursor: pointer;
`;

export const Tools = styled.div`
  display: flex;
  gap: 8px;
`;


export const Menu = styled.div`
  display: flex;
  gap: 8px;
`;
