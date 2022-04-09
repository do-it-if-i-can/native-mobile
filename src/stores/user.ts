import { atom } from "recoil";

type AuthUser = {
  isSignIn: boolean;
  user: {
    id: string;
    name: string;
    avatar: string;
  } | null;
};

export const user = atom<AuthUser | null>({
  key: "user",
  default: {
    isSignIn: false,
    user: null,
  },
});
