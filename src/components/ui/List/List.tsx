import type { FC, ReactNode } from "react";
import React, { memo } from "react";
import { StyleSheet } from "react-native";

import { BounceableView, TouchableOpacity } from "~/components/ui/View";
import type { CardStyleProps } from "~/types/style";

export type CardProps = CardStyleProps & {
  children: ReactNode;
  activeOpacity?: number;
  onPress?: () => void;
};

export const List: FC<CardProps> = memo(
  ({
    // theme
    bg = "bg1",
    lightBg,
    darkBg,
    border = "border1",
    // ViewProps
    outlineStyle,
    // TouchableOpacityProps
    activeOpacity = 0.9,
    viewStyle,
    children,
    onPress,
    ...otherProps
  }) => {
    return (
      <TouchableOpacity
        style={[outlineStyle]}
        {...{ bg, lightBg, darkBg, border, activeOpacity, otherProps }}
        onPress={onPress}
      >
        <BounceableView viewStyle={[defaultStyle.bounceable_view, viewStyle]}>{children}</BounceableView>
      </TouchableOpacity>
    );
  },
);

const defaultStyle = StyleSheet.create({
  bounceable_view: {
    paddingHorizontal: "1%",
    paddingVertical: "2%",
  },
});
