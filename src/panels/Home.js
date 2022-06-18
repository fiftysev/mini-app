import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  Panel,
  PanelHeader,
  Tabbar,
  Div,
  TabbarItem,
} from "@vkontakte/vkui";
import {Icon28LocationOutline, Icon28SettingsOutline} from "@vkontakte/icons";
import Locations from "./Locations";

const Home = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>Шпион</PanelHeader>
    <Div style={{margin: "auto", width: "75%"}}>
      <Button style={{width: "100%", height: "50px"}} onClick={go} data-to="game">Начать игру</Button>
    </Div>
    <Tabbar>
      <TabbarItem text="Локации" data-to="locations" onClick={go}>
        <Icon28LocationOutline />
      </TabbarItem>
      <TabbarItem text="Настройки" data-to="settings" onClick={go}>
        <Icon28SettingsOutline />
      </TabbarItem>
    </Tabbar>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Home;
