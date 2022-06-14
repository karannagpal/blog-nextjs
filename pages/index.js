import { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';
import FilteringMenu from 'components/FilteringMenu';
import { getAllBlogs } from 'lib/api';
import { useGetBlogs } from 'actions';

export default function Home({ blogs }) {
  // change this state name to renderList and type boolean
  const [filter, setFilter] = useState({
    view: { list: 0 },
  });

  const { data, error } = useGetBlogs();

  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />
      <hr />
      <Row className='mb-5'>
        {blogs.map((blog) =>
          filter.view.list === 1 ? (
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
        )}
      </Row>
    </PageLayout>
  );
}

/**
 * This function is called during the build time
 * This function is called only on server-side (not client-side)
 * This creates a static page (server-side rendered page)
 * */
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
