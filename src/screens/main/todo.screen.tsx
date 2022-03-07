import type { FC } from "react";
import React from "react";

import type { TodoScreenProps } from "~/components/screen/Todo";
import { TodoScreen as Screen } from "~/components/screen/Todo";

export const TodoScreen: FC<TodoScreenProps> = (props) => {
  return <Screen {...props} />;
};
