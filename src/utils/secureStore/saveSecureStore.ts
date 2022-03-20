import { setItemAsync } from "expo-secure-store";

export const saveSecureStore = async (key: string, value: string) => {
  return await setItemAsync(key, value);
};
