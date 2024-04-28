import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { View, Text, StyleSheet } from "react-native";
import React from "react";
import StackNavigator from "./StackNavigator";
import Favourites from "../screens/Favourites";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import FixAndManage from "./FixAndManage";

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "white", paddingBottom: 5 }} // Set activeBackgroundColor to transparent,
      activeColor="blue"
    >
      <Tab.Screen
        name="Contacts"
        component={StackNavigator}
        options={{
          tabBarLabel: "Contacts",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              name="contacts"
              size={30}
              color="blue"
              style={styles.tabBarIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Fix & Manage"
        component={FixAndManage}
        options={{
          tabBarLabel: "Fix & Manage",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="tools" size={26} color="blue" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarIcon: {
    width: 100, // Set the width to increase icon size
    height: 40, // Set the height to increase icon size
    textAlign: "center", // Center the icon horizontally
    lineHeight: 30, // Center the icon vertically
  },
});

export default TabNavigator;
