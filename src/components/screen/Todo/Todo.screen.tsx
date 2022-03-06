import type { FC } from "react";
import React from "react";
import { InputAccessoryView } from "react-native";

import { LayoutErrorBoundary } from "~/components/functional/Error";
import { KeyboardAvoiding } from "~/components/functional/KeyboardAvoiding";
import { TodoInput } from "~/components/model/todo/TodoInput";
import { SafeAreaLayout } from "~/components/ui/Layout";

import type { TodoScreenProps } from "./ScreenProps";
import { Todo } from "./Todo";

export const TodoScreen: FC<TodoScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <SafeAreaLayout bg="bg1">
        <KeyboardAvoiding>
          <Todo {...props} />
        </KeyboardAvoiding>

        <InputAccessoryView>
          <TodoInput />
        </InputAccessoryView>
      </SafeAreaLayout>
    </LayoutErrorBoundary>
  );
};
