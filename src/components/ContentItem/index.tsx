import { Container, Label, Value } from "./styles";

type Props = {
  text: string;
  value: string;
};

export const ContentItem = ({ text, value }: Props) => {
  return (
    <Container>
      <Label>{text}</Label>
      <Value>{value}</Value>
    </Container>
  );
};
