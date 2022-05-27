import PageLayout from 'components/PageLayout';
import { getAllBlogs, getBlogBySlug } from 'lib/api';

const BlogDetail = ({ blog }) => {
  return (
    <PageLayout>
      <h2>{blog.slug}</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, illum culpa! Alias
        dolores soluta blanditiis nemo quo nobis eligendi explicabo eos! Sequi omnis voluptatum
        itaque aperiam consequuntur esse sit tenetur? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Ratione, illum culpa! Alias dolores soluta blanditiis nemo quo nobis
        eligendi explicabo eos! Sequi omnis voluptatum itaque aperiam consequuntur esse sit tenetur?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, illum culpa! Alias
        dolores soluta blanditiis nemo quo nobis eligendi explicabo eos! Sequi omnis voluptatum
        itaque aperiam consequuntur esse sit tenetur? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Ratione, illum culpa! Alias dolores soluta blanditiis nemo quo nobis
        eligendi explicabo eos! Sequi omnis voluptatum itaque aperiam consequuntur esse sit tenetur?
      </p>
      <p>
        This blog post "{blog.title}" was about {blog.subtitle}. read more from {blog.author.name}
      </p>
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
