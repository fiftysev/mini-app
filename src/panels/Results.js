import React from "react";
import styles from "./results.module.css"
import {Button, Div, Panel, PanelHeader} from "@vkontakte/vkui";
import useStore from "../store/store";

const Results = ({id, go}) => {
  const spyName = useStore(state => state.spy.name);
  return (<Panel id={id}>
    <PanelHeader>Результаты игры</PanelHeader>
    <Div className={styles.layout}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Creative-Tail-People-spy.svg" alt="Шпион"/>
      <p className={styles.result_text}>Шпионом был(а) {spyName}</p>
      <Button className={styles.btn} onClick={go} data-to="home">Вернуться на главный экран</Button>
    </Div>
  </Panel>)
};

export default Results;

