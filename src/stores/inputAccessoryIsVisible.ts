import { atom } from "recoil";

export const inputAccessoryIsVisible = atom({
  key: "inputAccessoryIsVisible",
  default: {
    isVisible: true,
  },
});
