import { Row, Col } from 'react-bootstrap';
import PageLayout from 'components/PageLayout';
import AuthorIntro from 'components/AuthorIntro';
import CardListItem from 'components/CardListItem';
import CardItem from 'components/CardItem';
import { getAllBlogs } from 'lib/api';

export default function Home({ blogs, randomNumber }) {
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />
      <h3>{randomNumber}</h3>
      <Row className='mb-5'>
        {/* <Col md='10'>
          <CardListItem />
        </Col> */}
        {blogs.map((blog) => {
          return (
            <Col key={blog.slug} md='4'>
              <CardItem title={blog.title} subtitle={blog.subtitle} />
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
  const randomNumber = Math.random();
  return {
    props: {
      blogs,
      randomNumber,
    },
  };
}
