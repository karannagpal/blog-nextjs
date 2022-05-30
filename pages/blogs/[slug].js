import PageLayout from 'components/PageLayout';
import { BlogHeader } from 'components/BlogHeader';
import { getAllBlogs, getBlogBySlug } from 'lib/api';
import { Row, Col } from 'react-bootstrap';

import BlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    code: (props) => <pre data-language={props.node.language}>{props.node.code}</pre>,
  },
};

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
          <BlockContent
            imageOptions={{ w: 320, h: 240, fit: 'max' }}
            serializers={serializers}
            blocks={blog.content}
          />
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
