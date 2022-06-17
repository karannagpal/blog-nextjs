import { useGetBlogs } from 'actions';
import { useSWRPages } from 'swr';
import { Col } from 'react-bootstrap';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';

export const useGetBlogPages = ({ blogs: initialData, filter }) => {
  return useSWRPages(
    'index-page',
    ({ offset, withSWR }) => {
      const { data: blogs } = withSWR(useGetBlogs(initialData));

      // show a loader if there's no response yet
      if (!blogs) {
        return 'Loading...';
      }

      return blogs.map((blog) =>
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
      return 0;
    },
    [filter]
  );
};
