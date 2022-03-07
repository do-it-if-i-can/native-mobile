import React, { forwardRef, memo } from "react";
import { StyleSheet, Text as NativeText } from "react-native";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { ColorThemeProps } from "~/types/style";

export type TextProps = NativeText["props"] & ColorThemeProps;

export const Text = memo(
  forwardRef<NativeText, TextProps>(
    (
      {
        // 基本的に使用しない
        // custom themeで色を指定する
        lightColor: light,
        darkColor: dark,
        // custom theme
        color: fontColor = "color1",
        // TextProps
        style,
        ...otherProps
      },
      ref,
    ) => {
      const color = useThemeColor({ light, dark }, fontColor);

      return <NativeText ref={ref} style={[defaultStyle.text, style, { color }]} {...otherProps} />;
    },
  ),
);

const defaultStyle = StyleSheet.create({
  text: {
    width: "100%",
  },
});
