import type { FC } from "react";
import React from "react";
import WebView from "react-native-webview";

import type { SettingScreenProps } from "~/types";

export type PrivacyScreenProps = SettingScreenProps<"PrivacyScreen">;

export const Privacy: FC<PrivacyScreenProps> = () => {
  return <WebView source={{ uri: "http://localhost:3000/setting/privacy" }} />;
};
