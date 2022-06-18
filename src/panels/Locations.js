import React from "react";
import { Panel, PanelHeader } from "@vkontakte/vkui";
import { locations } from "../utils/locations";
import LocationsList from "../components/LocationsList";

const Locations = ({ id, go }) => {
  return (
    <Panel id={id}>
      <PanelHeader>Локации</PanelHeader>
      <LocationsList locations={locations} />
    </Panel>
  );
};

export default Locations;
