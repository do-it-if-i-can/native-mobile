import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { JWT_TOKEN } from "~/constants/ENV";
import { sleep } from "~/functions/sleep";
import { user } from "~/stores/user";
import { getSecureStore } from "~/utils/secureStore";
// import type { User } from "~/types/fetcher";

type SessionState = {
  route: "TodoScreen" | "SignInScreen";
};

export const useListenSession = () => {
  const [authUser, setAuthUser] = useRecoilState(user);
  const [sessionState, setSessionState] = useState<SessionState | null>(null);

  const listenSession = useCallback(async (): Promise<SessionState> => {
    setSessionState(null);

    const tokenResult = await getSecureStore(JWT_TOKEN);

    if (!tokenResult) {
      setAuthUser({
        isSignIn: false,
        user: null,
      });

      return { route: "SignInScreen" };
    }

    const userToken = JSON.parse(tokenResult);

    setAuthUser({
      isSignIn: true,
      user: {
        id: userToken.id,
        name: userToken.name,
        avatar: userToken.avatar,
      },
    });

    return { route: "TodoScreen" };

    // const sessionUser = await supabaseClient.auth.session()?.user;

    // is Session Empty
    // if (!sessionUser) {
    //   return { isSignIn: false, route: "SignInScreen" };
    // }

    // const { data, error } = await supabaseSelect<User>("user", {
    //   columns: "id, name, avatar, profile, sex",
    //   filter: (query: any) => query.eq("id", sessionUser && sessionUser.id),
    // });

    // --- or ---
    // const { data, error } = await supabaseClient
    //   .from<User>('user')
    //   .select('*')
    //   .eq('id', sessionInfo.user.id);

    // is Error
    // if (error || !data) {
    //   return { isSignIn: false, route: "SignInScreen" };
    // }

    // is Success
    // getUser(data[0]);
    // updateSession(true);
  }, []);

  useEffect(() => {
    if (!authUser?.user) {
      (async () => {
        const result = await listenSession();
        await sleep();
        setSessionState(result);
      })();
    }
  }, [authUser?.isSignIn]);

  return sessionState;
};
