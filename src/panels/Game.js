import React, {useEffect, useState} from "react";
import useStore from "../store/store";
import {Button, Header, Panel, PanelHeader} from "@vkontakte/vkui";

const Game = ({id, go}) => {
  const endGame = useStore(state => state.endGame);
  const currentPlayer = useStore(state => state.currentPlayer);
  const next = useStore(state => state.next);
  const onClick = (e) => {
    try {
      next()
    } catch (err) {
      console.error(e);
      go(e);
      endGame();
    }
  }
  return (
    <Panel id={id}>
      <PanelHeader>Игровой процесс</PanelHeader>
      <Header style={{margin: "16px auto"}}>Ваша карточка:</Header>
      <p>{currentPlayer.location}</p>
      {currentPlayer.isSpy && <p>Вы шпион!</p>}
      <Button onClick={onClick} data-to="home">Следующая карточка</Button>
    </Panel>
  )
}

export default Game;