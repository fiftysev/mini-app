import React from "react";
import {Panel, PanelHeader, PanelHeaderBack, Button} from "@vkontakte/vkui";
import { locations } from "../utils/locations";
import LocationsList from "../components/LocationsList";
import PropTypes from "prop-types";

const Locations = ({ id, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>}>Локации</PanelHeader>
      <Button style={{fontSize: "24px", height: "50px", margin: "16px"}}appearance="positive" onClick={go} data-to='location-add'>Добавить локацию</Button>
      <LocationsList locations={locations} />
    </Panel>
  );
};

Locations.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Locations;
