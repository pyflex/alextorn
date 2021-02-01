import React from 'react';
import { BLOCKS } from '@contentful/rich-text-types';

import BlockQuote from './blockquote';
import BlogPostImageWText from 'ownComponents/blogPostImage.component.js';

const richTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return (
        <>
          <br />
          <p>{children}</p>
        </>
      );
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="title">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className="title">{children}</h3>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, description, file } = node.data.target.fields;
      const mimeType = file['en-US'].contentType;
      const mimeGroup = mimeType.split('/')[0];

      switch (mimeGroup) {
        case 'image':
          return (
            <BlogPostImageWText
              imageFileUrl={file['en-US'].url}
              imageFileName={description ? description['en-US'] : null}
            />
          );
        case 'application':
          return (
            <a
              alt={description ? description['en-US'] : null}
              href={file['en-US'].url}
            >
              {title ? title['en-US'] : file['en-US'].details.fileName}
            </a>
          );
        default:
          return (
            <span style={{ backgroundColor: 'red', color: 'white' }}>
              {' '}
              {mimeType} embedded asset{' '}
            </span>
          );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const fields = node.data.target.fields;
      switch (node.data.target.sys.contentType.sys.id) {
        case 'blockquote':
          return (
            <div>
              <BlockQuote
                quoteText={fields.quoteText['en-US']}
                quoter={fields.quoter['en-US']}
              />
            </div>
          );
        default:
          return null;
      }
    },
  },
};

export default richTextOptions;
