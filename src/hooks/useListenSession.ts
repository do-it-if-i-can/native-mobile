import { useCallback, useEffect, useState } from "react";

import { sleep } from "~/functions/sleep";
// import type { User } from "~/types/fetcher";

type SessionState = {
  isSignIn: boolean;
  route: "TodoScreen" | "SignInScreen";
};

export const useListenSession = () => {
  const [sessionState, setSessionState] = useState<SessionState | null>(null);

  const listenSession = useCallback(async (): Promise<SessionState> => {
    setSessionState(null);

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
    return { isSignIn: true, route: "TodoScreen" };
  }, []);

  useEffect(() => {
    (async () => {
      const result = await listenSession();
      await sleep();
      setSessionState(result);
    })();
  }, []);

  return sessionState;
};
