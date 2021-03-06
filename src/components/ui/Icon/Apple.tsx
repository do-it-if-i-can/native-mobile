import type { FC } from "react";
import React, { memo } from "react";
import Svg, { Path } from "react-native-svg";

import { useThemeColor } from "~/hooks/useThemeColor";
import type { HeroIconStyle } from "~/types/style";

type Props = HeroIconStyle;

export const Apple: FC<Props> = memo(({ size = 38, lightIcon, darkIcon }) => {
  const iconColor = useThemeColor({ light: lightIcon, dark: darkIcon }, "icon1");

  return (
    <Svg width={size} height={size} viewBox="0 0 30 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M22.8281 17.1758C22.8125 14.5117 24.0195 12.5039 26.457 11.0234C25.0937 9.07031 23.0312 7.99609 20.3125 7.78906C17.7383 7.58594 14.9219 9.28906 13.8906 9.28906C12.8008 9.28906 10.3086 7.85938 8.34766 7.85938C4.30078 7.92188 0 11.0859 0 17.5234C0 19.4258 0.347656 21.3906 1.04297 23.4141C1.97266 26.0781 5.32422 32.6055 8.82031 32.5C10.6484 32.457 11.9414 31.2031 14.3203 31.2031C16.6289 31.2031 17.8242 32.5 19.8633 32.5C23.3906 32.4492 26.4219 26.5156 27.3047 23.8438C22.5742 21.6133 22.8281 17.3125 22.8281 17.1758V17.1758ZM18.7227 5.26172C20.7031 2.91016 20.5234 0.769531 20.4648 0C18.7148 0.101562 16.6914 1.19141 15.5391 2.53125C14.2695 3.96875 13.5234 5.74609 13.6836 7.75C15.5742 7.89453 17.3008 6.92187 18.7227 5.26172V5.26172Z"
        fill={iconColor}
      />
    </Svg>
  );
});
