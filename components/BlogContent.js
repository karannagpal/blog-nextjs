import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from './HighlightCode';
import { urlFor } from 'lib/api';

const serializers = {
  types: {
    code: ({ node }) => (
      <HighlightCode language={node.language}>
        {node.code}
        <div className='code-filename'>File: {node.filename}.js</div>
      </HighlightCode>
    ),
    image: ({ node: { asset, alt } }) => {
      return (
        <div className='blog-image'>
          <img src={urlFor(asset).height(300).url()} alt={alt} />
          <div className='image-alt'>"{alt}"</div>
        </div>
      );
    },
  },
};

const BlogContent = ({ blog }) => {
  return (
    <>
      <BlockContent serializers={serializers} blocks={blog.content} />
    </>
  );
};

export default BlogContent;
