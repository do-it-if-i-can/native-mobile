import type { FC } from "react";
import React from "react";

import { Text } from "~/components/ui/Text";
import { View } from "~/components/ui/View";
import type { SettingScreenProps } from "~/types";

export type TermsScreenProps = SettingScreenProps<"TermsScreen">;

export const Terms: FC<TermsScreenProps> = () => {
  return (
    <View>
      <Text>TermsScreen</Text>
    </View>
  );
};
