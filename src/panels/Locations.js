import React from "react";
import {Panel, PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";
import { locations } from "../utils/locations";
import LocationsList from "../components/LocationsList";
import PropTypes from "prop-types";
import Home from "./Home";

const Locations = ({ id, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader left={<PanelHeaderBack onClick={go} data-to="home"/>}>Локации</PanelHeader>
      <LocationsList locations={locations} />
    </Panel>
  );
};

Locations.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Locations;
