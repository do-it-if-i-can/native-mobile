import type { Dispatch, SetStateAction } from "react";
import React, { useCallback } from "react";
import { StyleSheet } from "react-native";

import { TouchableOpacity, View } from "~/components/ui/View";
import { useThemeColor } from "~/hooks/useThemeColor";
import type { BgThemeProps } from "~/types/style";

type Props<T> = BgThemeProps & {
  value: T;
  activeValue: T;
  onChangeValue?: Dispatch<SetStateAction<T>>;
};

export const Radio = <T,>({
  // 基本的に使用しない
  // custom themeで色を指定する
  lightBg,
  darkBg,
  bg = "primary",
  value,
  activeValue,
  onChangeValue,
}: Props<T>) => {
  const borderColor = useThemeColor({}, "border");

  const onPress = useCallback(() => {
    onChangeValue && onChangeValue(value);
  }, [onChangeValue, value]);

  return (
    <TouchableOpacity style={[defaultStyle.ring, { borderColor }]} activeOpacity={1} onPress={onPress}>
      {value === activeValue ? <View style={defaultStyle.active} {...{ lightBg, darkBg, bg }} /> : null}
    </TouchableOpacity>
  );
};

const defaultStyle = StyleSheet.create({
  ring: {
    justifyContent: "center",
    alignItems: "center",

    width: 24,
    height: 24,
    borderWidth: 1,
    borderRadius: 999,
  },
  active: {
    width: 12,
    height: 12,
    borderRadius: 999,
  },
});