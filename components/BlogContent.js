import { BlogHeader } from 'components/BlogHeader';
import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from './HighlightCode';

const serializers = {
  types: {
    code: ({ node }) => (
      <HighlightCode language={node.language}>
        {node.code}
        <div className='code-filename'>File: {node.filename}.js</div>
      </HighlightCode>
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
