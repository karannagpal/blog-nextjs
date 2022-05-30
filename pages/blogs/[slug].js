import PageLayout from 'components/PageLayout';
import { BlogHeader } from 'components/BlogHeader';
import { getAllBlogs, getBlogBySlug } from 'lib/api';
import { Row, Col } from 'react-bootstrap';

const BlogDetail = ({ blog }) => {
  return (
    <PageLayout className='blog-detail-page'>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={blog.coverImage}
            date={blog.date}
            author={blog.author}
          />
          <hr />
          {/* Blog Content Here */}
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using &apos; Content here,
          content here&apos; , making it look like readable English. Many desktop publishing
          packages and web page editors now use Lorem Ipsum as their default model text, and a
          search for &apos; lorem ipsum&apos; will uncover many web sites still in their infancy.
          Various versions have evolved over the years, sometimes by accident, sometimes on purpose
          (injected humour and the like).
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
