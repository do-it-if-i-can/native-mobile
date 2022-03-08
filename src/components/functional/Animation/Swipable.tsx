import type { FC, ReactNode } from "react";
import React from "react";
import Swipeout from "react-native-swipeout";

import { useThemeColor } from "~/hooks/useThemeColor";

type Props = Swipeout["props"] & {
  children: ReactNode;
};

export const Swipable: FC<Props> = ({ children, ...otherProps }) => {
  const backgroundColor = useThemeColor({}, "bg1");

  return (
    <Swipeout style={{ backgroundColor }} {...otherProps}>
      {children}
    </Swipeout>
  );
};
