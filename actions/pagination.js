import { getBlogs } from 'actions';
import { useSWRInfinite } from 'swr';

export const useGetBlogsPages = ({ filter }) => {
  // useSWRInfinite has 3 args
  // first one (function): getting fetch url
  // second one (function): the fetcher,
  // last (optional object): for passing additional options or configuration
  const results = useSWRInfinite(
    (index, previousPageData) => {
      if (index === 0) {
        return `/api/blogs?date=${filter.date.asc ? 'asc' : 'desc'}`;
      }
      if (!previousPageData.length) {
        return null;
      }
      return `/api/blogs?offset=${index * 6}&date=${filter.date.asc ? 'asc' : 'desc'}`;
    },
    getBlogs,
    { persistSize: true }
  );

  let hitEnd = false;

  const { data } = results;
  // data here will be an array of array

  if (data) {
    // checking if last element is empty array
    hitEnd = data[data.length - 1].length === 0;
  }

  return { ...results, hitEnd };
};
