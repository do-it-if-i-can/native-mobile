import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { FC } from "react";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

import { HeaderLeftButton } from "~/components/ui/Button";
import { useThemeColor } from "~/hooks/useThemeColor";
import { inputAccessoryIsVisible } from "~/stores/inputAccessoryIsVisible";
import type { SettingStackParamList } from "~/types";

import { AccountScreen } from "./account.screen";
import { PrivacyScreen } from "./privacy.screen";
import { ProfileScreen } from "./profile.screen";
import { SettingScreen } from "./setting.screen";
import { TermsScreen } from "./terms.screen";
import { ThemeScreen } from "./theme.screen";

const SettingStack = createNativeStackNavigator<SettingStackParamList>();

export const SettingNavigator: FC = () => {
  const backgroundColor = useThemeColor({}, "bg1");
  const setIsVisible = useSetRecoilState(inputAccessoryIsVisible);

  useEffect(() => {
    setIsVisible({ isVisible: false });
    return () => setIsVisible({ isVisible: true });
  }, [setIsVisible]);

  return (
    <SettingStack.Navigator
      initialRouteName="SettingScreen"
      screenOptions={{
        headerStyle: { backgroundColor },
      }}
    >
      <SettingStack.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={() => ({
          title: "設定",
          headerShadowVisible: false,
          headerLeft: () => {
            return <HeaderLeftButton type="close" />;
          },
        })}
      />
      <SettingStack.Screen
        name="AccountScreen"
        component={AccountScreen}
        options={({ navigation }) => ({
          title: "アカウント",
          headerShadowVisible: false,
          headerLeft: () => {
            const onNavigation = () => navigation.navigate("SettingScreen");
            return <HeaderLeftButton type="back" onPress={onNavigation} />;
          },
        })}
      />
      <SettingStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={({ navigation }) => ({
          title: "プロフィール",
          headerShadowVisible: false,
          headerLeft: () => {
            const onNavigation = () => navigation.navigate("SettingScreen");
            return <HeaderLeftButton type="back" onPress={onNavigation} />;
          },
        })}
      />
      <SettingStack.Screen
        name="ThemeScreen"
        component={ThemeScreen}
        options={({ navigation }) => ({
          title: "テーマ",
          headerShadowVisible: false,
          headerLeft: () => {
            const onNavigation = () => navigation.navigate("SettingScreen");
            return <HeaderLeftButton type="back" onPress={onNavigation} />;
          },
        })}
      />
      <SettingStack.Screen
        name="TermsScreen"
        component={TermsScreen}
        options={({ navigation }) => ({
          title: "利用規約",
          headerShadowVisible: false,
          headerLeft: () => {
            const onNavigation = () => navigation.navigate("SettingScreen");
            return <HeaderLeftButton type="back" onPress={onNavigation} />;
          },
        })}
      />
      <SettingStack.Screen
        name="PrivacyScreen"
        component={PrivacyScreen}
        options={({ navigation }) => ({
          title: "プライバシーポリシー",
          headerShadowVisible: false,
          headerLeft: () => {
            const onNavigation = () => navigation.navigate("SettingScreen");
            return <HeaderLeftButton type="back" onPress={onNavigation} />;
          },
        })}
      />
    </SettingStack.Navigator>
  );
};
