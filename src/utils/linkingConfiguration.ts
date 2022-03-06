import type { LinkingOptions } from "@react-navigation/native";
import { makeUrl } from "expo-linking";

import type { RootStackParamList } from "~/types";

export const linkingConfiguration: LinkingOptions<RootStackParamList> = {
  prefixes: [makeUrl("/")],
  config: {
    screens: {
      SignInScreen: {
        path: "signin",
      },
      TodoScreen: {
        path: "todo",
      },
      ProfileScreen: {
        path: "profile",
      },
    },
  },
};
