import type { FC } from "react";
import React, { memo } from "react";
import { TouchableOpacity as NativeTouchableOpacity } from "react-native";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { BgThemeProps } from "~/types/style";

export type TouchableOpacityProps = NativeTouchableOpacity["props"] & BgThemeProps;

export const TouchableOpacity: FC<TouchableOpacityProps> = memo((props) => {
  const { bg = "bg1", lightBg, darkBg, style, activeOpacity = 0.9, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightBg, dark: darkBg }, bg);

  return <NativeTouchableOpacity style={[style, { backgroundColor }]} activeOpacity={activeOpacity} {...otherProps} />;
});
