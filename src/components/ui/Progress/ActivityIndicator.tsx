import type { FC } from "react";
import React, { memo } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { ActivityIndicator as NativeActivityIndicator, StyleSheet } from "react-native";

import { useThemeColor } from "~/hooks/useThemeColor";

type Props = {
  style?: StyleProp<ViewStyle>;
};

export const ActivityIndicator: FC<Props> = memo(({ style }) => {
  const primary = useThemeColor({}, "primary");

  return <NativeActivityIndicator size="large" color={primary} style={[defaultStyle.center, style]} />;
});

const defaultStyle = StyleSheet.create({
  center: {
    flex: 1,
  },
});
