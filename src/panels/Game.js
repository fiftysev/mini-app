import React from "react";
import {Header, Panel} from "@vkontakte/vkui";

const Game = ({id, go}) => {
  return (
    <Panel id={id}>
      <Header>Ваша карточка:</Header>
    </Panel>
  )
}

export default Game;