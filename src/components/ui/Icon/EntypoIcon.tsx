import { Entypo } from "@expo/vector-icons";
import type { ComponentProps, FC } from "react";
import React, { memo } from "react";
import { StyleSheet } from "react-native";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { IconThemeProps } from "~/types/style";

type Props = IconThemeProps & {
  name: ComponentProps<typeof Entypo>["name"];
  size?: ComponentProps<typeof Entypo>["size"];
};

export const EntypoIcon: FC<Props> = memo(({ icon = "icon1", lightIcon, darkIcon, name, size = 22, ...otherProps }) => {
  const iconColor = useThemeColor({ light: lightIcon, dark: darkIcon }, icon);

  return <Entypo {...otherProps} name={name} style={defaultStyle.icon} size={size} color={iconColor} />;
});

const defaultStyle = StyleSheet.create({
  icon: {},
});
