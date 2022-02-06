/* eslint-disable react/destructuring-assignment */
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import type { ReactNode, VFC } from "react";
import React from "react";
import { StyleSheet } from "react-native";

import type { ViewProps } from "~/components/custom";
import { View } from "~/components/custom";
import { useThemeColor } from "~/hooks";

import { KeyboardAvoidingLayout } from "./KeyboardAvoidingLayout";

type Props = ViewProps & {
  children: ReactNode;
};

export const MainLayout: VFC<Props> = (props) => {
  const { style, lightBgColor, darkBgColor, children } = props;

  const tabBarHeight = useBottomTabBarHeight();

  const backgroundColor = useThemeColor({ light: lightBgColor, dark: darkBgColor }, "bg1");
  return (
    <KeyboardAvoidingLayout>
      <View
        style={[defaultStyle.full, style, { backgroundColor }, { marginBottom: tabBarHeight || 0 }]}
      >
        {children}
      </View>
    </KeyboardAvoidingLayout>
  );
};

const defaultStyle = StyleSheet.create({
  full: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  semi: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

    paddingHorizontal: "10%",
  },
});
