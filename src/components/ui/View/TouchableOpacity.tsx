import type { FC } from "react";
import React, { memo } from "react";
import { TouchableOpacity as NativeTouchableOpacity } from "react-native";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { BgThemeProps } from "~/types/style";

export type TouchableOpacityProps = NativeTouchableOpacity["props"] & BgThemeProps;

export const TouchableOpacity: FC<TouchableOpacityProps> = memo(
  ({
    // 基本的に使用しない
    lightBg: light,
    darkBg: dark,
    // custom theme
    bg = "bg1",
    // TextProps
    style,
    ...otherProps
  }) => {
    const backgroundColor = useThemeColor({ light, dark }, bg);

    return <NativeTouchableOpacity style={[style, { backgroundColor }]} {...otherProps} />;
  },
);
