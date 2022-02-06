import { deleteItemAsync } from "expo-secure-store";

export const deleteSequreStore = async (key: string) => {
  return await deleteItemAsync(key);
};
