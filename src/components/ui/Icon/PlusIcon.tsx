import type { FC } from "react";
import React from "react";
import Svg, { Path } from "react-native-svg";

import { useThemeColor } from "~/hooks/useThemeColor";

type Props = {
  size?: number;
};

export const PlusIcon: FC<Props> = (props) => {
  const icon = useThemeColor({}, "white");

  return (
    <Svg
      width={props.size}
      height={props.size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke={icon}
      strokeWidth={2}
    >
      <Path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </Svg>
  );
};
