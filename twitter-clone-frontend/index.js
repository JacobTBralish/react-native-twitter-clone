/** @format */
import React from "react";
import { Provider } from "react-redux";
import configureStore from "./src/store/configureStore";

// AWS Configuration
import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => RNRedux);
