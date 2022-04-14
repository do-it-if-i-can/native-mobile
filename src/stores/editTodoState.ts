import { atom } from "recoil";

import type { Category } from "$/gql";

export type EditTodoState = {
  isFocused: boolean;
  id: number | null;
  value: string;
  category: Category | null;
};

export const editTodoState = atom<EditTodoState>({
  key: "editTodoState",
  default: {
    isFocused: false,
    id: null,
    value: "",
    category: null,
  },
});
