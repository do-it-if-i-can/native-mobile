import type { FC, ReactNode } from "react";
import React from "react";
import { StyleSheet } from "react-native";
import type { BounceableProps } from "rn-bounceable";
import { Bounceable as NativeBounceable } from "rn-bounceable";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { CustomViewStyleProps } from "~/types/style";

type Props = Omit<BounceableProps, "contentContainerStyle"> &
  CustomViewStyleProps & {
    children: ReactNode;
  };

export const BounceableView: FC<Props> = (props) => {
  const { bg = "bg0", lightBg, darkBg, viewStyle, activeScale = 0.97, ...otherProps } = props;
  const backgroundColor = useThemeColor({ light: lightBg, dark: darkBg }, bg);

  return (
    <NativeBounceable
      {...otherProps}
      contentContainerStyle={[defaultStyle.bg, viewStyle, { backgroundColor }]}
      activeScale={activeScale}
    />
  );
};

const defaultStyle = StyleSheet.create({
  bg: {
    width: "100%",
  },
});
