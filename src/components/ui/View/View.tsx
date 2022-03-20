import type { FC } from "react";
import React, { memo } from "react";
import { StyleSheet, View as NativeView } from "react-native";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { BgThemeProps } from "~/types/style";

export type ViewProps = NativeView["props"] & BgThemeProps;

export const View: FC<ViewProps> = memo((props) => {
  const { bg = "bg0", lightBg, darkBg, style, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightBg, dark: darkBg }, bg);

  return <NativeView style={[defaultStyle.bg, style, { backgroundColor }]} {...otherProps} />;
});

const defaultStyle = StyleSheet.create({
  bg: {
    width: "100%",
  },
});
