import request from '@app/utils/request';
import { QueryKey, UseBaseQueryOptions, useQuery } from '@tanstack/react-query';

type UseReactQueryType = {
  arg: {
    url?: string;
    key: QueryKey;
    params?: object;
  };
  config?: UseBaseQueryOptions;
};

function useReactQuery({ arg, config }: UseReactQueryType) {
  const { key, url, params } = arg;
  const headers = {};
  return useQuery(
    key,
    async () =>
      request({
        url,
        method: 'GET',
        params,
        headers,
      })
        .then(response => response.data)
        .catch(err => console.warn(err)),
    {
      refetchOnWindowFocus: false,
      retry: 0,
      retryOnMount: true,
      ...config,
    },
  );
}

export default useReactQuery;
