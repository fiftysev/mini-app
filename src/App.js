import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  AdaptivityProvider,
  AppRoot,
  ConfigProvider,
  SplitLayout,
  SplitCol,
} from "@vkontakte/vkui";
import Locations from "./panels/Locations";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import Settings from "./panels/Settings";
import Game from "./panels/Game";
import CountdownPanel from "./panels/Countdown";
import Results from "./panels/Results";
import LocationAdd from "./panels/LocationAdd";

const App = () => {
  const [scheme, setScheme] = useState("bright_light");
  const [activePanel, setActivePanel] = useState("home");

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        setScheme(data.scheme);
      }
    });
  }, []);

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <ConfigProvider scheme={scheme}>
      <AdaptivityProvider>
        <AppRoot>
          <SplitLayout>
            <SplitCol>
              <View activePanel={activePanel}>
                <Home id="home" go={go}/>
                <Locations id="locations" go={go}/>
                <Game id="game" go={go}/>
                <Settings id="settings" go={go}/>
                <CountdownPanel id="countdown" go={go}/>
                <Results id="results" go={go}/>
                <LocationAdd id="location-add" go={go}/>
              </View>
            </SplitCol>
          </SplitLayout>
        </AppRoot>
      </AdaptivityProvider>
    </ConfigProvider>
  );
};

export default App;
