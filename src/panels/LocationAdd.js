import React, {useState} from "react";
import {Button, FormItem, FormLayout, Input, Panel, PanelHeader, PanelHeaderBack} from "@vkontakte/vkui";
import useStore from "../store/store";

const LocationAdd = ({id, go}) => {
  const [locationName, setLocationName] = useState("");
  const [locationPic, setLocationPic] = useState("");
  const addLocation = useStore(state => state.addLocation)
  const onClick = (e) => {
    addLocation(locationName, locationPic);
    go(e);
  }
  return <Panel id={id}>
     <PanelHeader left={<PanelHeaderBack onClick={go} data-to="locations"/>}>Добавление локации</PanelHeader>
    <FormLayout>
      <FormItem top="Введите название локации">
        <Input placeholder="Название локации" required={true} onChange={(e) => setLocationName(e.target.value)}/>
      </FormItem>
      <FormItem top="Вставьте ссылку на фото (не обязательное поле)">
        <Input placeholder="Ссылка на фото локации" onChange={(e) => setLocationPic(e.target.value)}/>
      </FormItem>
    </FormLayout>
    <Button style={{width: "75%", height: "50px", margin: "16px auto"}} appearance="positive" onClick={onClick} data-to="locations">Добавить</Button>
   </Panel>
}

export default LocationAdd;