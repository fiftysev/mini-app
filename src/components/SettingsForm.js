import React from "react";
import styles from "./settingsform.module.css";
import {Button, FormItem, FormLayout, Group, Input, Select} from "@vkontakte/vkui";
import useStore from "../store/store";

const SettingsForm = (props) => {
  const playersCount = useStore((state) => state.playersCount);
  const setPlayersCount = useStore((state) => state.setPlayersCount);
  const players = useStore((state) => state.players);
  const updatePlayer = useStore((state) => state.updatePlayer);
  return (
    <>
      <FormLayout>
        <FormItem top="Количество игроков:">
          <Select
            defaultValue={playersCount}
            placeholder="Выберите количество игроков"
            onChange={(e) => setPlayersCount(e.target.value)}
            options={[
              {value: 3, label: 3},
              {value: 4, label: 4},
              {value: 5, label: 5},
              {value: 6, label: 6},
              {value: 7, label: 7},
              {value: 8, label: 8},
            ]}
          />
        </FormItem>
      </FormLayout>
      <FormItem top="Введите имена игроков">
        {players.map(v => {
          return <Input
            style={{margin: "16px 0"}}
            placeholder="Имя"
            defaultValue={v.name}
            key={v.id}
            onChange={(e) => {
              updatePlayer(v.id, e.target.value)
            }
            }/>
        })}
          </FormItem>
          <Button className={styles.button}>Сохранить</Button>
          </>
          )
        }

        export default SettingsForm;