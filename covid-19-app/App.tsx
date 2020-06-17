import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import * as Font from "expo-font";

import "intl";
import "intl/locale-data/jsonp/en-US";

import Routes from "routes";
import LoadingText from "components/shared/LoadingText";

import store from "store";

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync({
        Nunito_400Regular: require("./src/assets/fonts/Nunito_Regular.ttf"),
        Nunito_700Bold: require("./src/assets/fonts/Nunito_Bold.ttf"),
      });
      setFontsLoaded(true);
    })();
  }, []);

  return (
    <Provider store={store}>
      {fontsLoaded ? <Routes /> : <LoadingText />}
    </Provider>
  );
}
