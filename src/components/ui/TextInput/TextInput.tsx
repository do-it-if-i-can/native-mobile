import React, { forwardRef, memo } from "react";
import { StyleSheet, TextInput as NativeTextInput } from "react-native";

import { View } from "~/components/ui/View";
import { useThemeColor } from "~/hooks/useThemeColor";
import type { TextInputStyleProps } from "~/types/style";

export type TextInputProps = Omit<NativeTextInput["props"], "style"> &
  TextInputStyleProps & {
    isFocused?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
  };

export const TextInput = memo(
  forwardRef<NativeTextInput, TextInputProps>((props, ref) => {
    const {
      bg = "bg2",
      lightBg,
      darkBg,
      color = "color1",
      lightColor,
      darkColor,
      border = "primary",
      lightBorder,
      darkBorder,
      viewStyle,
      textStyle,
      isFocused,
      onFocus,
      onBlur,
      ...otherProps
    } = props;

    const primary = useThemeColor({ light: lightBorder, dark: darkBorder }, border);
    const placeholder = useThemeColor({}, "color2");
    const textColor = useThemeColor({ light: lightColor, dark: darkColor }, color);

    return (
      <View
        style={[
          defaultStyle.bg,
          viewStyle,
          isFocused
            ? // eslint-disable-next-line react-native/no-inline-styles
              {
                borderWidth: 1,
                borderColor: primary,
                shadowColor: primary,
                shadowOffset: { width: 0, height: 0 },
                shadowOpacity: 0.4,
                elevation: 1,
              }
            : null,
        ]}
        {...{ lightBg, darkBg, bg }}
      >
        <NativeTextInput
          ref={ref}
          onPressOut={onFocus}
          onBlur={onBlur}
          style={[defaultStyle.text, textStyle, { color: textColor }]}
          placeholderTextColor={placeholder}
          selectionColor={primary}
          {...otherProps}
        />
      </View>
    );
  }),
);

const defaultStyle = StyleSheet.create({
  bg: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 18,
  },
  text: {
    fontSize: 14,
  },
});
