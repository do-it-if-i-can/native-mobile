import type { FC } from "react";
import React, { memo } from "react";
import { StyleSheet } from "react-native";
import type { NativeSafeAreaViewProps } from "react-native-safe-area-context";
import { SafeAreaView as NativeSafeAreaView } from "react-native-safe-area-context";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { BgThemeProps } from "~/types/style";

export type SafeAreaViewProps = NativeSafeAreaViewProps & BgThemeProps;

export const SafeAreaView: FC<SafeAreaViewProps> = memo(
  ({
    // theme
    bg = "bg0",
    lightBg,
    darkBg,
    // SafeAreaViewProps
    style,
    ...otherProps
  }) => {
    const backgroundColor = useThemeColor({ light: lightBg, dark: darkBg }, bg);

    return <NativeSafeAreaView style={[defaultStyle.bg, style, { backgroundColor }]} {...otherProps} />;
  },
);

const defaultStyle = StyleSheet.create({
  bg: {
    flex: 1,
  },
});
