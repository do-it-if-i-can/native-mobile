import type { FC } from "react";
import React from "react";
import { InputAccessoryView } from "react-native";

import { LayoutErrorBoundary } from "~/components/functional/Error";
import { KeyboardAvoiding } from "~/components/functional/KeyboardAvoiding";
import { TodoInput } from "~/components/model/todo/TodoInput";
import { SafeAreaLayout } from "~/components/ui/Layout";

import { DnDSample } from "./DnDSample";
import type { TodoScreenProps } from "./ScreenProps";

export const TodoScreen: FC<TodoScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <SafeAreaLayout bg="bg1">
        <KeyboardAvoiding>
          <DnDSample {...props} />
        </KeyboardAvoiding>

        <InputAccessoryView>
          <TodoInput />
        </InputAccessoryView>
      </SafeAreaLayout>
    </LayoutErrorBoundary>
  );
};
