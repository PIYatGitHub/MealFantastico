import React, { Component } from "react";
import AppNavigator from "./app/app.navigator";
import { Provider } from "mobx-react";
import stores from "./app/stores";
import { StyleProvider } from "native-base";
import getTheme from "./native-base-theme/components";
import custom from "./native-base-theme/variables/custom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Provider stores={stores}>
        <StyleProvider style={getTheme(custom)}>
          <AppNavigator />
        </StyleProvider>
      </Provider>
    );
  }
}
