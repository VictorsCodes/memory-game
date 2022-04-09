import styled from "styled-components";

type ContainerProps = {
  showBackground: boolean;
};
export const Container = styled.div<ContainerProps>`
  background-color: ${(props) =>
    props.showBackground ? "#1550ff" : "#e2e3e3"};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
`;

type IconProps = {
  opacity?: number;
};

export const Icon = styled.img<IconProps>`
  height: 40px;
  width: 40px;
  opacity: ${(props) => props.opacity ?? 1};
`;
