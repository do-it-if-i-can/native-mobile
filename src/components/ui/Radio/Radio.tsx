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

export const Radio = <T,>(props: Props<T>) => {
  const { bg = "primary", lightBg, darkBg, value, activeValue, onChangeValue } = props;
  const borderColor = useThemeColor({}, "border");

  const onPress = useCallback(() => {
    onChangeValue && onChangeValue((prev) => (prev === value ? activeValue : value));
  }, [onChangeValue, value, activeValue]);

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
    borderWidth: 2,
    borderRadius: 999,
  },
  active: {
    width: 16,
    height: 16,
    borderRadius: 999,
  },
});
