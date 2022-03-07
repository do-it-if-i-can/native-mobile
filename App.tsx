// import { ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { useCachedResources } from "~/hooks/useCachedResources";
import { useColorScheme } from "~/hooks/useColorScheme";
import { Navigation } from "~/screens";
// import { apolloClient } from "~/utils/apolloClient";

const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      // <ApolloProvider client={apolloClient}>
      <>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </>
      // </ApolloProvider>
    );
  }
};

// eslint-disable-next-line import/no-default-export
export default App;
