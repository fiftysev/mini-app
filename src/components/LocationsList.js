import { CardGrid, Group } from "@vkontakte/vkui";
import React from "react";
import LocationsListItem from "./LocationsListItem";

const LocationsList = ({ id, locations }) => {
  return (
    <CardGrid size="l">
      {locations.map((v) => {
        return (
          <LocationsListItem key={v.id} id={v.id} name={v.name} img={v.img} />
        );
      })}
    </CardGrid>
  );
};

export default LocationsList;
