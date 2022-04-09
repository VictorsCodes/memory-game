import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  width: 200px;
  height: 50px;
  background-color: #1550ff;
  border: 0;
  border-radius: 6px;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const IconArea = styled.div`
  display: flex;
  border-right: 1px solid rgba(255, 255, 255, 0.5);
  height: 50px;
  padding: 0 15px;
  align-items: center;
  &:hover {
    opacity: 1;
  }
`;

export const Icon = styled.div``;

export const Label = styled.div`
  &:hover {
    opacity: 1;
  }
  height: 50px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: white;
`;
