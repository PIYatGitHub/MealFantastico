import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SplashScreen from "./screens/splash.screen";
import LoginScreen from "./screens/login.screen";

const NavStack = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }
});

const AppNavigator = createAppContainer(NavStack);

export default AppNavigator;
