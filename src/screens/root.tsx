import { createNativeStackNavigator } from "@react-navigation/native-stack";
import type { FC } from "react";
import React from "react";

import { Avatar } from "~/components/model/user/Avatar";
import { QinTodo } from "~/components/ui/Icon";
import { ActivityIndicator } from "~/components/ui/Progress";
import { useListenSession } from "~/hooks/useListenSession";
import { useThemeColor } from "~/hooks/useThemeColor";
import { SettingNavigator } from "~/screens/main/setting";
import type { RootStackParamList } from "~/types";

import { NotFoundScreen } from "./404.screen";
import { SignInScreen } from "./auth/signin.screen";
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
        headerStyle: { backgroundColor },
        headerShown: false,
      }}
    >
      <RootStack.Screen name="NotFoundScreen" component={NotFoundScreen} options={{}} />

      <RootStack.Screen name="SignInScreen" component={SignInScreen} options={{}} />

      <RootStack.Screen
        name="TodoScreen"
        component={TodoScreen}
        options={({ navigation }) => ({
          headerShown: true,
          headerStyle: { backgroundColor },
          headerShadowVisible: false,
          headerTitle: () => <QinTodo width={120} height={40} />,
          headerRight: () => {
            const onNavigation = () => navigation.navigate("SettingNavigator");
            return <Avatar onPress={onNavigation} />;
          },
        })}
      />

      <RootStack.Group screenOptions={{ presentation: "fullScreenModal" }}>
        <RootStack.Screen name="SettingNavigator" component={SettingNavigator} options={{}} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
