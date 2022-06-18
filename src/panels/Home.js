import React from "react";
import PropTypes from "prop-types";

import {
  Button,
  Panel,
  PanelHeader,
  Tabbar,
  TabbarItem,
} from "@vkontakte/vkui";
import { Icon28LocationOutline } from "@vkontakte/icons";

const Home = ({ id, go, fetchedUser }) => (
  <Panel id={id}>
    <PanelHeader>Шпион</PanelHeader>
    <Tabbar>
      <TabbarItem text="Локации" data-to="locations">
        <Icon28LocationOutline />
      </TabbarItem>
    </Tabbar>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Home;
