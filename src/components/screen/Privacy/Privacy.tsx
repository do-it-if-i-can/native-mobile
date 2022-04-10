import type { FC } from "react";
import React from "react";
import WebView from "react-native-webview";

import { ActivityIndicator } from "~/components/ui/Progress";
import type { SettingScreenProps } from "~/types";

export type PrivacyScreenProps = SettingScreenProps<"PrivacyScreen">;

// TODO:テーマ変更に対応させる
const injectedCode = `
  (function() {
    localStorage.setItem('theme', 'light');
  })()
`;

export const Privacy: FC<PrivacyScreenProps> = () => {
  return (
    <WebView
      source={{ uri: "http://localhost:3000/setting/privacy" }}
      injectedJavaScriptBeforeContentLoaded={injectedCode}
      renderLoading={() => <ActivityIndicator style={{ marginBottom: 300 }} />}
      startInLoadingState
    />
  );
};
