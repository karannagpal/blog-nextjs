import { useGetBlogs } from 'actions';
import { useSWRPages } from 'swr';
import { Col } from 'react-bootstrap';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';

export const useGetBlogPages = ({ blogs, filter }) => {
  return useSWRPages(
    'index-page',
    ({ offset, withSWR }) => {
      // initialData will have value only on first load
      // after first load, offset will have some value
      let initialData = !offset && blogs;
      const { data: paginatedBlogs } = withSWR(useGetBlogs({ offset }, initialData));
      console.log('paginatedBlogs', paginatedBlogs);

      // show a loader if there's no response yet
      if (!paginatedBlogs) {
        return 'Loading...';
      }

      return paginatedBlogs.map((blog) =>
        filter.view.list ? (
          <Col key={`${blog.slug}-list`} md='10'>
            <CardListItem
              title={blog.title}
              subtitle={blog.subtitle}
              date={blog.date}
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
              date={blog.date}
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
      return (index + 1) * 3;
    },
    [filter]
  );
};
