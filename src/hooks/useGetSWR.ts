import useSWR from "swr";

import { getFetcherWithToken } from "~/functions/fetcher/unfetch";

export const useGetSWR = <T>(url: string) => {
  const { data, error } = useSWR<T>(url);

  return {
    data: data,
    isError: error,
    isLoading: !error && !data,
  };
};

export const useGetSWRWithToken = <T>(url: string, token: string) => {
  const { data, error } = useSWR<T>([url, token], getFetcherWithToken);

  return {
    data: data,
    isError: error,
    isLoading: !error && !data,
  };
};
