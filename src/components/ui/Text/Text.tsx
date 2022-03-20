import type { FC } from "react";
import React, { memo } from "react";
import { StyleSheet, Text as NativeText } from "react-native";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { ColorThemeProps } from "~/types/style";

export type TextProps = NativeText["props"] & ColorThemeProps;

export const Text: FC<TextProps> = memo((props) => {
  const { color = "color1", lightColor, darkColor, style, ...otherProps } = props;
  const textColor = useThemeColor({ light: lightColor, dark: darkColor }, color);

  return <NativeText style={[defaultStyle.text, style, { color: textColor }]} {...otherProps} />;
});

const defaultStyle = StyleSheet.create({
  text: {
    width: "100%",
  },
});
