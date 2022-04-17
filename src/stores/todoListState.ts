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
      { id: 1, title: "React勉強", category: "TODAY", done: false },
      { id: 2, title: "Svelte勉強", category: "TODAY", done: false },
      { id: 3, title: "Angular勉強", category: "TODAY", done: false },
      { id: 4, title: "Vue勉強", category: "TODAY", done: false },
      { id: 5, title: "Next.js勉強", category: "TODAY", done: false },
      { id: 6, title: "Remix勉強", category: "TODAY", done: false },
    ],
  },
  {
    id: "TOMORROW",
    title: "明日する",
    color: "secondary",
    items: [
      { id: 7, title: "Python勉強", category: "TOMORROW", done: false },
      { id: 8, title: "Go勉強", category: "TOMORROW", done: false },
      { id: 9, title: "Java勉強", category: "TOMORROW", done: false },
      { id: 10, title: "Ruby勉強", category: "TOMORROW", done: false },
      { id: 11, title: "PHP勉強", category: "TOMORROW", done: false },
      { id: 12, title: "Rust勉強", category: "TOMORROW", done: false },
    ],
  },
  {
    id: "SOMEDAY",
    title: "今度する",
    color: "tertiary",
    items: [
      { id: 13, title: "Figma勉強", category: "SOMEDAY", done: false },
      { id: 14, title: "Docker勉強", category: "SOMEDAY", done: false },
      { id: 15, title: "Notion勉強", category: "SOMEDAY", done: false },
      { id: 16, title: "Prisma勉強", category: "SOMEDAY", done: false },
    ],
  },
];

type SampleTodo = typeof SAMPLE_DATA[number];

export const todoListState = atom<SampleTodo[]>({
  key: "todoListState",
  default: SAMPLE_DATA,
});
