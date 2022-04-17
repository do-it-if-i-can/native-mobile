import { atom } from "recoil";

export type Category = "SOMEDAY" | "TODAY" | "TOMORROW";

export type TodoState = {
  id: number;
  title: string;
  done: boolean;
  category: Category;
  priority?: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export const SAMPLE_DATA = [
  {
    id: "TODAY",
    title: "今日する",
    color: "primary",
    items: [
      { id: 1, title: "じゃがいもを買う", category: "TODAY", done: false },
      { id: 2, title: "にんじんを買う", category: "TODAY", done: false },
      { id: 3, title: "玉ねぎを買う", category: "TODAY", done: false },
      { id: 4, title: "鍋を買う", category: "TODAY", done: false },
      { id: 5, title: "肉を買う", category: "TODAY", done: false },
    ],
  },
  {
    id: "TOMORROW",
    title: "明日する",
    color: "secondary",
    items: [
      { id: 11, title: "1. にんじん、じゃがいも、玉ねぎ、肉を切る", category: "TOMORROW", done: false },
      { id: 12, title: "2. ①で切った野菜を鍋に入れる", category: "TOMORROW", done: false },
      { id: 13, title: "3. 肉に火が通るまで炒める", category: "TOMORROW", done: false },
      { id: 14, title: "4. カレーのルーを入れる", category: "TOMORROW", done: false },
      { id: 15, title: "カレーを買ってくる", category: "TOMORROW", done: false },
    ],
  },
  {
    id: "SOMEDAY",
    title: "今度する",
    color: "tertiary",
    items: [
      { id: 21, title: "カレーを食べる", category: "SOMEDAY", done: false },
      { id: 22, title: "カレーをおかわりする", category: "SOMEDAY", done: false },
    ],
  },
];

type SampleTodo = typeof SAMPLE_DATA[number];

export const todoListState = atom<SampleTodo[]>({
  key: "todoListState",
  default: SAMPLE_DATA,
});
