import type { FC } from "react";
import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { HeroIconStyle } from "~/types/style";

type Props = HeroIconStyle;

export const ExternalLinkIcon: FC<Props> = memo(({ icon = "icon1", lightIcon, darkIcon, size = 24 }) => {
  const iconColor = useThemeColor({ light: lightIcon, dark: darkIcon }, icon);

  return (
    <Svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke={iconColor}
      strokeWidth={2}
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </Svg>
  );
});
