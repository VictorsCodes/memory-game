import { GridItemType } from "../../types/GridItemType";
import { Container, Icon } from "./styles";
import b7Icon from "../../svgs/b7.svg";
import { items } from "../../data/items";

type Props = {
  data: GridItemType;
  onClick: () => void;
};

export const GridItem = ({ data, onClick }: Props) => {
  return (
    <Container
      showBackground={data.permanentShown || data.shown}
      onClick={onClick}
    >
      {data.permanentShown === false && data.shown === false && (
        <Icon src={b7Icon} alt="" opacity={0.1} />
      )}
      {(data.permanentShown || data.shown) && data.item !== null && (
        <Icon src={items[data.item].icon} alt="" />
      )}
    </Container>
  );
};
