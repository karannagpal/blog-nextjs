import { BlogHeader } from 'components/BlogHeader';
import BlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    code: ({ node }) => (
      <>
        <pre data-language={node.language}>{node.code}</pre>
        <em>File: {node.filename}</em>
      </>
    ),
  },
};

const BlogContent = ({ blog }) => {
  return (
    <>
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
    </>
  );
};

export default BlogContent;
