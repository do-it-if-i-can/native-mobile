import type { FC } from "react";
import React from "react";
import type { StyleProp } from "react-native";
import { Image as NativeImage } from "react-native";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { BgThemeProps, OutlineStyle } from "~/types/style";

export type ImageProps = NativeImage["props"] &
  BgThemeProps & {
    outlineStyle?: StyleProp<OutlineStyle>;
  };

export const Image: FC<ImageProps> = ({
  // theme
  bg = "bg1",
  lightBg,
  darkBg,
  // ViewProps
  style,
  ...otherProps
}) => {
  const backgroundColor = useThemeColor({ light: lightBg, dark: darkBg }, bg);
  return <NativeImage {...otherProps} style={[style, { backgroundColor }]} />;
};
