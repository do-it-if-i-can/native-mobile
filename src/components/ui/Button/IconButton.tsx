import type { FC, ReactNode } from "react";
import React, { memo } from "react";
import type { StyleProp, ViewStyle } from "react-native";
import { StyleSheet } from "react-native";

import { BounceableView, TouchableOpacity } from "~/components/ui/View";

type Props = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export const IconButton: FC<Props> = memo(({ style, children, onPress }) => {
  return (
    <BounceableView viewStyle={[defaultStyle.outline, style]} onPress={onPress}>
      <TouchableOpacity bg="bg0">{children}</TouchableOpacity>
    </BounceableView>
  );
});

const defaultStyle = StyleSheet.create({
  outline: {
    width: "auto",
  },
});
