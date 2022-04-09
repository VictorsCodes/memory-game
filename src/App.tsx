import "./styles.ts";
import LogoPhoto from "./assets/logo.png";
import iconReset from "./svgs/restart.svg";
import { items } from "./data/items";
import { Button } from "./components/Button";
import { GridItem } from "./components/GridItem";
import { useEffect, useState } from "react";
import { ContentItem } from "./components/ContentItem/index";
import { GridItemType } from "./types/GridItemType";
import { Container, Content, Grid, LeftSide, Logo, RightSide } from "./styles";
import { FormatTime } from "./helpers/FormatTime";

const App = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(0);
  const [movesCount, setMovesCount] = useState<number>(0);
  const [shownCount, setShownCount] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItemType[]>([]);

  useEffect(() => {
    resetAndCreate();
  }, []);

  useEffect(() => {
    const timing = setInterval(() => {
      if (isPlaying) {
        setTimer(timer + 1);
      }
    }, 1000);
    return () => clearInterval(timing);
  }, [isPlaying, timer]);

  useEffect(() => {
    if (
      movesCount > 0 &&
      gridItems.every((item) => item.permanentShown === true)
    ) {
      setIsPlaying(false);
    }
  }, [movesCount, gridItems]);

  useEffect(() => {
    if (shownCount === 2) {
      let opened = gridItems.filter((item) => item.shown === true);
      if (opened.length === 2) {
        if (opened[0].item === opened[1].item) {
          let tempGrid = [...gridItems];
          for (let i in tempGrid) {
            if (tempGrid[i].shown) {
              tempGrid[i].permanentShown = true;
              tempGrid[i].shown = false;
            }
          }
          setGridItems(tempGrid);
          setShownCount(0);
        } else {
          setTimeout(() => {
            let tempGrid = [...gridItems];
            for (let i in tempGrid) {
              tempGrid[i].shown = false;
            }
            setGridItems(tempGrid);
            setShownCount(0);
          }, 1000);
        }

        setMovesCount(movesCount + 1);
      }
    }
  }, [shownCount, gridItems]);

  const handleClickIcon = (index: number) => {
    if (isPlaying && index !== null && shownCount < 2) {
      let tempGrid = [...gridItems];
      if (
        tempGrid[index].permanentShown === false &&
        tempGrid[index].shown === false
      ) {
        tempGrid[index].shown = true;
        setShownCount(shownCount + 1);
      }
      setGridItems(tempGrid);
    }
  };

  const resetAndCreate = () => {
    setTimer(0);
    setMovesCount(0);
    setShownCount(0);

    let tempGridItems: GridItemType[] = [];
    for (let i = 0; i < items.length * 2; i++) {
      tempGridItems.push({ item: null, shown: false, permanentShown: false });
    }

    for (let w = 0; w < 2; w++) {
      for (let i = 0; i < items.length; i++) {
        let position = -1;
        while (position < 0 || tempGridItems[position].item !== null) {
          position = Math.floor(Math.random() * (items.length * 2));
        }
        tempGridItems[position].item = i;
      }
    }
    setGridItems(tempGridItems);
    setIsPlaying(true);
  };

  return (
    <Container>
      <LeftSide>
        <Logo href="" target="_blank">
          <img src={LogoPhoto} alt="Logo do site" width={150} />
        </Logo>
        <Content>
          <ContentItem text="Tempo" value={FormatTime(timer)} />
          <ContentItem text="Movimentos" value={movesCount.toString()} />
        </Content>
        <Button text="Reiniciar" icon={iconReset} onClick={resetAndCreate} />
      </LeftSide>
      <RightSide>
        <Grid>
          {gridItems.map((item, index) => (
            <GridItem
              data={item}
              key={index}
              onClick={() => handleClickIcon(index)}
            />
          ))}
        </Grid>
      </RightSide>
    </Container>
  );
};

export default App;
