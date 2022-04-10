import type { FC } from "react";
import React from "react";
import { WebView } from "react-native-webview";

import type { SettingScreenProps } from "~/types";

export type TermsScreenProps = SettingScreenProps<"TermsScreen">;

export const Terms: FC<TermsScreenProps> = () => {
  return <WebView source={{ uri: "http://localhost:3000/setting/terms" }} />;
};
