import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from './HighlightCode';
import { urlFor } from 'lib/api';
import Image from 'next/image';

const serializers = {
  types: {
    code: ({ node }) => (
      <HighlightCode language={node.language}>
        {node.code}
        <div className='code-filename'>File: {node.filename}.js</div>
      </HighlightCode>
    ),
    image: ({ node: { asset, alt, position = 'center' } }) => {
      return (
        <div className={`blog-image blog-image-${position}`}>
          <Image src={urlFor(asset).height(300).url()} alt={alt} />
          <div className='image-alt'>&quot;{alt}&quot;</div>
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
