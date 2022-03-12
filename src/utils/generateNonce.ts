import * as Random from "expo-random";

import { NONCE_SECRET } from "~/constants/ENV";
import { saveSecureStore } from "~/utils/secureStore";

export const generateNonce = async () => {
  const nonceKey = await Random.getRandomBytesAsync(16);
  const nonce = String.fromCharCode.apply(null, nonceKey as unknown as number[]);
  await saveSecureStore(NONCE_SECRET, nonce);
  return nonce;
};
