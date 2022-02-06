import { setItemAsync } from "expo-secure-store";

export const saveSequreStore = async (key: string, value: string) => {
  return await setItemAsync(key, value);
};
