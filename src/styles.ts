import styled from "styled-components";

export const Container = styled.div`
  max-width: 900px;
  margin: auto;
  display: flex;
  padding: 50px 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    align-items: center;
  }
`;

export const Logo = styled.a``;

export const Content = styled.div`
  width: 100%;
  margin: 10px 0;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    text-align: center;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 430px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
