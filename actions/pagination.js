import { useEffect } from 'react';
import { useGetBlogs } from 'actions';
import { useSWRPages } from 'swr';
import { Col } from 'react-bootstrap';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';
import CardItemBlank from 'components/CardItemBlank';
import CardListItemBlank from 'components/CardListItemBlank';
import moment from 'moment';

export const useGetBlogsPages = ({ blogs, filter }) => {
  useEffect(() => {
    window.__pagination_init = true;
  }, []);

  return useSWRPages(
    'index-page',
    ({ offset, withSWR }) => {
      // initialData will have value only on first load
      // after first load, offset will have some value
      let initialData = !offset && blogs;

      if (typeof window !== 'undefined' && window.__pagination_init) {
        // first render happens on serverside, where window object is not available
        initialData = null;
      }

      const { data: paginatedBlogs } = withSWR(useGetBlogs({ offset, filter }, initialData));

      // showing placeholder if there's no response yet
      if (!paginatedBlogs) {
        return Array(3)
          .fill(0)
          .map((_, index) =>
            filter.view.list ? (
              <Col key={`placeholder-listItem-${index}`} md='10'>
                <CardListItemBlank />
              </Col>
            ) : (
              <Col key={`placeholder-item-${index}`} md='4'>
                <CardItemBlank />
              </Col>
            )
          );
      }

      return paginatedBlogs.map((blog) =>
        filter.view.list ? (
          <Col key={`${blog.slug}-list`} md='10'>
            <CardListItem
              title={blog.title}
              subtitle={blog.subtitle}
              date={moment(blog.date).format('LLL')}
              author={blog.author}
              link={{
                href: `/blogs/[slug]`,
                as: `/blogs/${blog.slug}`,
              }}
            />
          </Col>
        ) : (
          <Col key={blog.slug} md='4'>
            <CardItem
              title={blog.title}
              subtitle={blog.subtitle}
              date={moment(blog.date).format('LLL')}
              blogImage={blog.coverImage}
              author={blog.author}
              slug={blog.slug}
            />
          </Col>
        )
      );
    },
    // here you will compute the offset, that will get passed into prev callback function
    // SWR: data you'll get using 'useSWR' function
    // index: count of current page (0 if its first page & so on)
    (SWR, index) => {
      if (SWR.data && SWR.data.length === 0) {
        return null;
      }
      return (index + 1) * 6;
    },
    [filter]
  );
};
