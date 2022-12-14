import BlockContent from '@sanity/block-content-to-react';
import { HighlightCode } from 'components';
import { urlFor } from 'lib/api';

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
          <img src={urlFor(asset).height(600).fit('max').url()} alt={alt} />
          <div className='image-alt'>&quot;{alt}&quot;</div>
        </div>
      );
    },
  },
};

const BlogContent = ({ content }) => <BlockContent serializers={serializers} blocks={content} />;

export default BlogContent;
