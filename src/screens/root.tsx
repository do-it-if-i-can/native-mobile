import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { FC } from "react";
import React from "react";

import { ActivityIndicator } from "~/components/ui/Progress";
import { useListenSession } from "~/hooks/useListenSession";
import { useThemeColor } from "~/hooks/useThemeColor";
import type { RootStackParamList } from "~/types";

import { NotFoundScreen } from "./404.screen";
import { SignInScreen } from "./auth/signin.screen";
import { ProfileScreen } from "./main/profile.screen";
import { TodoScreen } from "./main/todo.screen";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator: FC = () => {
  const session = useListenSession();
  const backgroundColor = useThemeColor({}, "bg1");

  if (!session) return <ActivityIndicator />;
  return (
    <RootStack.Navigator
      initialRouteName={session.route}
      screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor },
      }}
    >
      <RootStack.Screen name="SignInScreen" component={SignInScreen} options={{}} />

      <RootStack.Screen name="TodoScreen" component={TodoScreen} options={{}} />

      <RootStack.Screen name="ProfileScreen" component={ProfileScreen} options={{}} />

      <RootStack.Screen name="NotFoundScreen" component={NotFoundScreen} options={{ title: "Oops!" }} />
    </RootStack.Navigator>
  );
};
