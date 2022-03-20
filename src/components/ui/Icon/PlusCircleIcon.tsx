import type { FC } from "react";
import React from "react";
import Svg, { Path } from "react-native-svg";

import { useThemeColor } from "~/hooks/useThemeColor";

type Props = {
  size?: number;
};

export const PlusCircleIcon: FC<Props> = (props) => {
  const icon = useThemeColor({}, "icon1");

  return (
    <Svg width={props.size} height={props.size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={icon}>
      <Path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
