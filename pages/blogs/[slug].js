import PageLayout from 'components/PageLayout';
import { getAllBlogs, getBlogBySlug } from 'lib/api';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { Row, Col } from 'react-bootstrap';
import BlogContent from 'components/BlogContent';
import BlogHeader from 'components/BlogHeader';
import PreviewAlert from 'components/PreviewAlert';
import { urlFor } from 'lib/api';
import moment from 'moment';

const BlogDetail = ({ blog, preview }) => {
  // this and the next couple of if conditions are totally optional
  const router = useRouter();
  if (!router.isFallback && !blog?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  if (router.isFallback) {
    return <PageLayout className='blog-detail-page'>Loading...</PageLayout>;
  }

  return (
    <PageLayout className='blog-detail-page'>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          {preview && <PreviewAlert />}
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            coverImage={urlFor(blog.coverImage).height(600).url()}
            author={blog.author}
            date={moment(blog.date).format('LLL')}
          />
          <hr />
          {blog.content && <BlogContent content={blog.content} />}
        </Col>
      </Row>
    </PageLayout>
  );
};

export async function getStaticProps({ params, preview = false, previewData }) {
  // TODO: pass preview to getBlogBySlug to fetch draft version of blog
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog, preview },
  };
}

// TODO: introduce fallback
export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  return {
    paths: blogs?.map((b) => ({ params: { slug: b.slug } })),
    fallback: true,
  };
}

export default BlogDetail;
