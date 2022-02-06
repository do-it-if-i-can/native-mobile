import { getItemAsync } from "expo-secure-store";

export const getSequreStore = async (key: string) => {
  return await getItemAsync(key);
};
