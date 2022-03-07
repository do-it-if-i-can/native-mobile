import type { LinkingOptions } from "@react-navigation/native";
import { makeUrl } from "expo-linking";

import type { RootStackParamList } from "~/types";

export const linkingConfiguration: LinkingOptions<RootStackParamList> = {
  prefixes: [makeUrl("/")],
  config: {
    screens: {
      NotFoundScreen: {
        path: "*",
      },
      SignInScreen: {
        path: "signin",
      },
      TodoScreen: {
        path: "todo",
      },
      SettingNavigator: {
        screens: {
          SettingScreen: {
            path: "setting",
          },
          AccountScreen: {
            path: "account",
          },
          ProfileScreen: {
            path: "profile",
          },
          ThemeScreen: {
            path: "theme",
          },
        },
      },
      Modal: {
        path: "modal",
      },
    },
  },
};
