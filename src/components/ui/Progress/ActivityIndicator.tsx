import type { FC } from "react";
import React, { memo } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { ActivityIndicator as NativeActivityIndicator, StyleSheet } from "react-native";

import { View } from "~/components/ui/View";
import { useThemeColor } from "~/hooks/useThemeColor";

type Props = {
  style?: StyleProp<ViewStyle>;
};

export const ActivityIndicator: FC<Props> = memo(({ style }) => {
  const primary = useThemeColor({}, "primary");

  return (
    <View bg="bg1" style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <NativeActivityIndicator size="large" color={primary} style={[defaultStyle.center, style]} />
    </View>
  );
});

const defaultStyle = StyleSheet.create({
  center: {
    flex: 1,
  },
});
