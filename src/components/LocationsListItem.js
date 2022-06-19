import React from "react";
import styles from "./listitem.module.css";
import {Card, Div} from "@vkontakte/vkui";

const LocationsListItem = ({name, img}) => {
  return (
    <Card>
      <div className={styles.listitem}>
        {img && <img src={img} alt="Локация"/>}
        <Div>{name}</Div>
      </div>
    </Card>
  );
};

export default LocationsListItem;
