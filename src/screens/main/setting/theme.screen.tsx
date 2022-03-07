import type { FC } from "react";
import React from "react";

import type { ThemeScreenProps } from "~/components/screen/Theme";
import { ThemeScreen as Screen } from "~/components/screen/Theme";

export const ThemeScreen: FC<ThemeScreenProps> = (props) => {
  return <Screen {...props} />;
};
