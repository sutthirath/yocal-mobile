import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/DashScreen";
import LinksScreen from "../screens/ExploreScreen";
import SettingsScreen from "../screens/SettingsScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

HomeStack.navigationOptions = {
  tabBarLabel: "Dashboard",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-chatbubbles${focused ? "" : "-outline"}`
          : "md-chatbubbles"
      }
    />
  )
};

const LinksStack = createStackNavigator({
  Links: LinksScreen
});

LinksStack.navigationOptions = {
  tabBarLabel: "Explore",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-map" : "md-map"}
    />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-settings" : "md-settings"}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});
