import type { FC } from "react";
import React from "react";

import { LayoutErrorBoundary } from "~/components/functional/Error";
import { SafeAreaLayout } from "~/components/ui/Layout";

import type { TodoScreenProps } from "./ScreenProps";
import { Todo } from "./Todo";

export const TodoScreen: FC<TodoScreenProps> = (props) => {
  return (
    <LayoutErrorBoundary>
      <SafeAreaLayout bg="bg1" isCenter>
        <Todo {...props} />
      </SafeAreaLayout>
    </LayoutErrorBoundary>
  );
};
