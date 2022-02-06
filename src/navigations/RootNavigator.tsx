// import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import { useThemeColor } from "~/hooks";
import { BottomTabNavigator } from "~/screens/main";
import type { RootStackParamList } from "~/types";

// const Drawer = createDrawerNavigator<RootStackParamList>();
const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  const backgroundColor = useThemeColor({}, "bg1");
  return (
    <RootStack.Navigator initialRouteName="Main">
      <RootStack.Screen
        name="Main"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
          headerStyle: { backgroundColor: backgroundColor },
        }}
      />
    </RootStack.Navigator>
  );
};
