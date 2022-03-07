import type { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    type RootParamList = RootStackParamList;
  }
}

export type RootStackParamList = {
  NotFoundScreen: undefined;
  SignInScreen: undefined;
  TodoScreen: undefined;
  SettingNavigator: NavigatorScreenParams<SettingStackParamList> | undefined;
  Modal: undefined;
};

export type StackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

/* setting */
export type SettingStackParamList = {
  SettingScreen: undefined;
  AccountScreen: undefined;
  ProfileScreen: undefined;
  ThemeScreen: undefined;
};

export type SettingScreenProps<T extends keyof SettingStackParamList> = CompositeScreenProps<
  NativeStackScreenProps<SettingStackParamList, T>,
  NativeStackScreenProps<RootStackParamList>
>;
