import request from '@app/utils/request';
import { QueryKey, UseBaseQueryOptions, useQuery } from '@tanstack/react-query';
import Config from 'react-native-config';

type UseReactQueryType = {
  arg: {
    url?: string;
    key: QueryKey;
    params?: object;
  };
  options?: UseBaseQueryOptions;
};

function useReactQuery({ arg, options }: UseReactQueryType) {
  const { key, url, params } = arg;
console.log("=====================>"+ Config.APP_KEY)
  const headers = {};
  return useQuery(
    key,
    async () =>
      request({
        url,
        method: 'GET',
        params: { 'api-key': '', ...params },
        headers,
      })
        .then(response => response.data)
        .catch(err => console.warn(err)),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      retryOnMount: true,
      ...options,
    },
  );
}

export default useReactQuery;
