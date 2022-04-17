import type { FC } from "react";
import React, { useCallback } from "react";
import { InputAccessoryView, StyleSheet } from "react-native";
import { useRecoilValue } from "recoil";

import { LayoutErrorBoundary } from "~/components/functional/ErrorBoundary";
import { KeyboardAvoiding } from "~/components/functional/KeyboardAvoiding";
import { TodoInput } from "~/components/model/todo/TodoInput";
import { Avatar } from "~/components/model/user/Avatar";
import type { TodoScreenProps } from "~/components/screen/Todo";
import { DnDSample } from "~/components/screen/Todo";
import { QinTodo } from "~/components/ui/Icon";
import { Layout } from "~/components/ui/Layout";
import { View } from "~/components/ui/View";
import { inputAccessoryIsVisible } from "~/stores/inputAccessoryIsVisible";

export const TodoScreen: FC<TodoScreenProps> = (props) => {
  const inputAccessory = useRecoilValue(inputAccessoryIsVisible);

  const onNavigation = useCallback(() => {
    props.navigation.navigate("SettingNavigator");
  }, [props.navigation]);

  return (
    <LayoutErrorBoundary>
      <Layout bg="bg1">
        <KeyboardAvoiding>
          <View style={style.header}>
            <QinTodo width={120} height={40} />
            <View style={style.avatar}>
              <Avatar onPress={onNavigation} />
            </View>
          </View>
          <DnDSample {...props} />
        </KeyboardAvoiding>

        {inputAccessory.isVisible ? (
          <InputAccessoryView>
            <TodoInput />
          </InputAccessoryView>
        ) : null}
      </Layout>
    </LayoutErrorBoundary>
  );
};

const style = StyleSheet.create({
  header: {
    position: "relative",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    paddingVertical: 4,
  },
  avatar: {
    position: "absolute",
    width: "auto",
    top: 4,
    right: 20,
  },
});
