import type { FC } from "react";
import React from "react";

import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";
import type { SettingScreenProps } from "~/types";

export type PrivacyScreenProps = SettingScreenProps<"PrivacyScreen">;

export const Privacy: FC<PrivacyScreenProps> = () => {
  return (
    <View>
      <Text>PrivacyScreen</Text>
    </View>
  );
};
