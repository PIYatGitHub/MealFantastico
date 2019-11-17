import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SplashScreen from "./screens/splash.screen";
import LoginScreen from "./screens/login.screen";
import MatchScreen from "./screens/match.screen";

const Match = {
  screen: MatchScreen,
  navigationOptions: {
    headerMode: "screen",
    headerTitle: "Matches",
    drawerLabel: "Matches"
  }
};
const MatchStack = createStackNavigator(
  {
    Match: Match
  },
  {}
);

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
  },
  Match: {
    screen: MatchScreen,
    navigationOptions: {
      headerMode: "screen",
      headerTitle: "Matches",
      drawerLabel: "Matches"
    }
  }
});

const AppNavigator = createAppContainer(NavStack);

export default AppNavigator;
