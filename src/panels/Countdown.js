import React from "react";
import styles from "./countdown.module.css";
import useStore from "../store/store";
import Countdown from "react-countdown";
import {Button, Panel, PanelHeader} from "@vkontakte/vkui";
import _, {padStart} from "lodash";
import bridge from "@vkontakte/vk-bridge";

const Renderer = ({hours, minutes, seconds, completed, go}) => {
  if (completed) {
    return (
      <div className={styles.layout}>
        <p className={styles.heading}>Время вышло!</p>
        <Button className={styles.btn} onClick={go} data-to="results">Перейти к результатам</Button>
      </div>)
  }
  return (
    <div className={styles.layout}>
      <p className={styles.heading}>Время пошло!</p>
      <p className={styles.timer}>
        {padStart(minutes.toString(), 2, '0')}:{padStart(seconds.toString(), 2, '0')}
        <Button className={styles.btn} onClick={go} data-to="results">Завершить раунд</Button>
      </p>
    </div>
  )
}

const CountdownPanel = ({id, go}) => {
  const playersCount = useStore(state => state.playersCount);
  const time = playersCount * 60 * 1000;
  const flashlight = () => {
    bridge.send("VKWebAppFlashGetInfo").then(res => {
      return res.is_available;
    }).then(res => {
      if (res) {
        let fn = setInterval(async() => {
          let isLighting = await bridge.send("VKWebAppFlashGetInfo").then(res => res.level);
          bridge.send("VKWebAppFlashSetLevel", {level: isLighting ? 0 : 1}).then(res => console.log(res));
        }, 250)
        setTimeout(() => {
          clearInterval(fn);
          bridge
            .send("VKWebAppFlashSetLevel", {level: 0})
            .then(res => console.log(res))
            .catch(e => console.error(e))
        }, 10000)
      }
    });
  }
  return (
    <Panel id={id} className={styles.layout}>
      <PanelHeader>Таймер игры</PanelHeader>
      <Countdown date={Date.now() + time}
                 onComplete={flashlight}
                 renderer={(props) => <Renderer go={go} minutes={props.minutes} completed={props.completed}
                                                seconds={props.seconds}/>}/>
    </Panel>
  )
}

export default CountdownPanel;