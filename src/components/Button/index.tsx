import { Container, Icon, IconArea, Label } from "./styles";

type Props = {
  text: string;
  icon?: any;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({ text, icon, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      {icon && (
        <IconArea>
          <Icon>
            <img src={icon} alt="" />
          </Icon>
        </IconArea>
      )}
      <Label>{text}</Label>
    </Container>
  );
};
