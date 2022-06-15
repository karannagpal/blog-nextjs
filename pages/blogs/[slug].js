import PageLayout from 'components/PageLayout';
import { getAllBlogs, getBlogBySlug } from 'lib/api';
import { Row, Col } from 'react-bootstrap';
import BlogContent from 'components/BlogContent';
import { BlogHeader } from 'components/BlogHeader';
import { urlFor } from 'lib/api';

const BlogDetail = ({ blog }) => {
  return (
    <PageLayout className='blog-detail-page'>
      <Row>
        <Col md={{ span: 7, offset: 1 }}>
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={urlFor(blog.coverImage).height(400).url()}
            date={blog.date}
            author={blog.author}
          />
          <hr />
          <BlogContent blog={blog} />
        </Col>
      </Row>
    </PageLayout>
  );
};

export const getStaticProps = async ({ params }) => {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog },
  };
};

export const getStaticPaths = async () => {
  const allBlogs = await getAllBlogs();
  const paths = allBlogs.map((blog) => {
    return { params: { slug: blog.slug } };
  });
  return {
    paths,
    fallback: false,
  };
};

export default BlogDetail;
