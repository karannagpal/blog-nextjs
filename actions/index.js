import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGetHello = () => useSWR('/api/hello', fetcher);

export const useGetBlogs = (initialData) => {
  // for new versions of SWR, pass "initialData" in args of parent function "useGetBlogs"
  // return useSWR('/api/blogs', fetcher, { fallbackData: initialData });
  return useSWR('/api/blogs', fetcher);
};
