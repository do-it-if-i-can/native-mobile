import type { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import type { RootStackParamList } from "~/types";

export const LinkingConfiguration: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Main: {
        path: "main",
        screens: {
          TabOne: {
            path: "tab1",
            screens: {
              TabOneScreen: "tab1",
            },
          },
          TabTwo: {
            path: "tab2",
            screens: {
              TabTwoScreen: "tab2",
            },
          },
          TabThree: {
            path: "tab3",
            screens: {
              TabThreeScreen: "tab3",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};
