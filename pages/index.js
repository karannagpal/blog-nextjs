import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';
import { getAllBlogs } from 'lib/api';

export default function Home({ blogs }) {
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />
      <Row className='mb-5'>
        {/* <Col md='10'>
          <CardListItem />
        </Col> */}
        {blogs.map((blog) => {
          return (
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
          );
        })}
      </Row>
    </PageLayout>
  );
}

// This function is called during the build time
// This function is called only on server-side (not client-side)
// This creates a static page (server-side rendered page)
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
