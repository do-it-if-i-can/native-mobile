import { atom } from "recoil";

export type Category = "SOMEDAY" | "TODAY" | "TOMORROW";

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
