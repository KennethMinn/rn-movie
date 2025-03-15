import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants/icons";
import TabarIcon from "@/components/TabarIcon";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 70,
          backgroundColor: "#0f0D23",
          borderColor: "transparent",
        },
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabarIcon icon={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabarIcon icon={icons.search} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="save"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabarIcon icon={icons.save} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabarIcon icon={icons.person} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
