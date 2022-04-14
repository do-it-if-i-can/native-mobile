import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppRegistry } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RecoilRoot } from "recoil";

import { useCachedResources } from "~/hooks/useCachedResources";
import { Navigation } from "~/screens";
import { apolloClient } from "~/utils/apolloClient";

const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApolloProvider client={apolloClient}>
        <RecoilRoot>
          <SafeAreaProvider>
            <Navigation />
            <StatusBar />
          </SafeAreaProvider>
        </RecoilRoot>
      </ApolloProvider>
    );
  }
};

// eslint-disable-next-line import/no-default-export
export default App;
