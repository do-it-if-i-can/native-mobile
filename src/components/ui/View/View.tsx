import React, { forwardRef, memo } from "react";
import { StyleSheet, View as NativeView } from "react-native";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { BgThemeProps } from "~/types/style";

export type ViewProps = NativeView["props"] & BgThemeProps;

export const View = memo(
  forwardRef<NativeView, ViewProps>(
    (
      {
        // 基本的に使用しない
        // custom themeで色を指定する
        lightBg: light,
        darkBg: dark,
        // custom theme
        bg = "bg0",
        // ViewProps
        style,
        ...otherProps
      },
      ref,
    ) => {
      const backgroundColor = useThemeColor({ light, dark }, bg);

      return <NativeView ref={ref} style={[defaultStyle.bg, style, { backgroundColor }]} {...otherProps} />;
    },
  ),
);

const defaultStyle = StyleSheet.create({
  bg: {
    width: "100%",
  },
});
