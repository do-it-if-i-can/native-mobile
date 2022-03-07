import type { FC } from "react";
import React from "react";

import type { SettingScreenProps } from "~/components/screen/Setting";
import { SettingScreen as Screen } from "~/components/screen/Setting";

export const SettingScreen: FC<SettingScreenProps> = (props) => {
  return <Screen {...props} />;
};
