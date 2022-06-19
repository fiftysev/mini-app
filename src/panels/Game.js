import React, {useEffect, useState} from "react";
import styles from "./game.module.css";
import useStore from "../store/store";
import {Button, Card, Group, Header, Panel, PanelHeader} from "@vkontakte/vkui";
import ReactCardFlip from "react-card-flip";

const Game = ({id, go}) => {
  const [flipped, setFlipped] = useState(false);
  const endGame = useStore(state => state.endGame);
  const currentPlayer = useStore(state => state.currentPlayer);
  const next = useStore(state => state.next);
  const onClick = (e) => {
    try {
      console.log(currentPlayer);
      next()
      setFlipped(false);
    } catch (err) {
      console.error(e);
      endGame();
      go(e);
    }
  }
  const onCardClick = (e) => {
    setFlipped(prevState => !prevState);
  }
  return (
    <Panel id={id}>
      <PanelHeader>Игровой процесс</PanelHeader>
      <Header style={{margin: "16px auto"}}>Ваша карточка:</Header>
      <ReactCardFlip isFlipped={flipped} containerClassName={styles.card}>
        <Card className={`${styles.inner__card} ${styles.front}`} mode="shadow" onClick={onCardClick}>
          <p>Нажатие перевернет карточку!</p>
        </Card>
        <Card className={`${styles.inner__card} ${styles.back}`} mode="shadow" onClick={onCardClick}>
          <p>Локация: {currentPlayer.location}</p>
          {currentPlayer.isSpy && <p>Вы шпион!</p>}
        </Card>
      </ReactCardFlip>
      <Button className={styles.btn} onClick={onClick} data-to="countdown">Следующая карточка</Button>
    </Panel>
  )
}

export default Game;