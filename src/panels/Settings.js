import React from "react";
import {Panel, PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";
import SettingsForm from "../components/SettingsForm";

const Settings = ({id, go}) => {
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>}>Настройки</PanelHeader>
      <SettingsForm/>
    </Panel>
  )
}

export default Settings;