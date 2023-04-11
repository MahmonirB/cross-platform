export type ResponseData<T> = {
  status: string;
  copyright: string;
  num_results: number;
  results: T[];
};
