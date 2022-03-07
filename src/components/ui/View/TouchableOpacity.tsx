import type { FC } from "react";
import React, { forwardRef, memo } from "react";
import { TouchableOpacity as NativeTouchableOpacity } from "react-native";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { BgThemeProps } from "~/types/style";

export type TouchableOpacityProps = NativeTouchableOpacity["props"] & BgThemeProps;

export const TouchableOpacity: FC<TouchableOpacityProps> = memo(
  forwardRef<NativeTouchableOpacity, TouchableOpacityProps>(
    (
      {
        // 基本的に使用しない
        lightBg: light,
        darkBg: dark,
        // custom theme
        bg = "bg1",
        // TextProps
        style,
        ...otherProps
      },
      ref,
    ) => {
      const backgroundColor = useThemeColor({ light, dark }, bg);

      return <NativeTouchableOpacity ref={ref} style={[style, { backgroundColor }]} {...otherProps} />;
    },
  ),
);
