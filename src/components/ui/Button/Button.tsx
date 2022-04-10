import type { FC, ReactElement } from "react";
import React, { memo } from "react";
import { StyleSheet } from "react-native";

import { Text } from "~/components/ui/Text";
import { BounceableView, TouchableOpacity } from "~/components/ui/View";
import { useThemeColor } from "~/hooks/useThemeColor";
import type { StyleProps } from "~/types/style";

export type ButtonProps = StyleProps & {
  label?: string;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
  isBorder?: true;
  onPress?: () => void;
};

export const Button: FC<ButtonProps> = memo((props) => {
  const {
    bg = "bg1",
    color = "color1",
    darkBg,
    lightBg,
    lightColor,
    darkColor,
    isBorder,
    outlineStyle,
    viewStyle,
    textStyle,
    label,
    leftIcon,
    rightIcon,
    onPress,
  } = props;

  const borderColor = useThemeColor({}, isBorder ? "border" : bg);

  return (
    <BounceableView viewStyle={[defaultStyle.outline, outlineStyle]} onPress={onPress}>
      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={[defaultStyle.bg, viewStyle, { borderWidth: 1, borderColor }]}
        {...{ lightBg, darkBg, bg }}
      >
        {leftIcon}
        <Text style={[defaultStyle.text, textStyle]} {...{ lightColor, darkColor, color }}>
          {label}
        </Text>
        {rightIcon}
      </TouchableOpacity>
    </BounceableView>
  );
});

const defaultStyle = StyleSheet.create({
  outline: {
    width: "100%",
    borderRadius: 999,
  },
  bg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",

    paddingVertical: 18,
    borderRadius: 999,
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});
