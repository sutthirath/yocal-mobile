import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import TabBarIcon from "../components/TabBarIcon";
import DashScreen from "../screens/DashScreen";
import ExploreScreen from "../screens/ExploreScreen";
import ExperienceScreen from "../screens/ExperienceScreen";

const DashStack = createStackNavigator({
  Dash: DashScreen
});

DashStack.navigationOptions = {
  tabBarLabel: "Dashboard",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-square${focused ? "" : "-outline"}`
          : "md-square"
      }
    />
  )
};

const ExploreStack = createStackNavigator({
  Explore: ExploreScreen
});

ExploreStack.navigationOptions = {
  tabBarLabel: "Explore",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-map" : "md-map"}
    />
  )
};

const ExperienceStack = createStackNavigator({
  Experience: ExperienceScreen
});

ExperienceStack.navigationOptions = {
  tabBarLabel: "Experience",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-flag" : "md-flag"}
    />
  )
};

export default createBottomTabNavigator({
  DashStack,
  ExploreStack,
  ExperienceStack
});
