import type { FC } from "react";
import React from "react";
import { InputAccessoryView } from "react-native";
import { useRecoilValue } from "recoil";

import { LayoutErrorBoundary } from "~/components/functional/Error";
import { KeyboardAvoiding } from "~/components/functional/KeyboardAvoiding";
import { TodoInput } from "~/components/model/todo/TodoInput";
import { Layout } from "~/components/ui/Layout";
import { inputAccessoryIsVisible } from "~/stores/inputAccessoryIsVisible";

import { DnDSample } from "./DnDSample";
import type { TodoScreenProps } from "./ScreenProps";

export const TodoScreen: FC<TodoScreenProps> = (props) => {
  const inputAccessory = useRecoilValue(inputAccessoryIsVisible);

  return (
    <LayoutErrorBoundary>
      <Layout safeArea="bottom-horizontal" bg="bg1">
        <KeyboardAvoiding>
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
