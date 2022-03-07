import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { FC } from "react";
import React from "react";

import { Toaster } from "~/components/ui/Toaster";
import type { SettingStackParamList } from "~/types";

import { AccountScreen } from "./account.screen";
import { ProfileScreen } from "./profile.screen";
import { SettingScreen } from "./setting.screen";
import { ThemeScreen } from "./theme.screen";

const SettingStack = createNativeStackNavigator<SettingStackParamList>();

export const SettingNavigator: FC = () => {
  return (
    <>
      <SettingStack.Navigator initialRouteName="SettingScreen" screenOptions={{ headerShown: false }}>
        <SettingStack.Screen name="SettingScreen" component={SettingScreen} />
        <SettingStack.Screen name="AccountScreen" component={AccountScreen} />
        <SettingStack.Screen name="ProfileScreen" component={ProfileScreen} />
        <SettingStack.Screen name="ThemeScreen" component={ThemeScreen} />
      </SettingStack.Navigator>

      <Toaster />
    </>
  );
};
