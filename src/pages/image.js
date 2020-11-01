import React from 'react';

import BlogPostImageWText from 'ownComponents/blogPostImage.component.js';

const something = () => {
  const quoteText = `Genius is one percent inspiration and ninety-nine percent perspiration.`;
  const quoteAuthor = `Zero`;
  const quoteAuthorImageFileUrl = require('assets/img/p10.jpg');
  const quoteAuthorImageFileName = `Author, Zero`;
  const imageFileUrl = require('assets/img/marc-olivier-jodoin.jpg');
  const imageFileName = `Nice Background`;

  return (
    <>
      <BlogPostImageWText
        quoteText={quoteText}
        quoteAuthor={quoteAuthor}
        quoteAuthorImageFileUrl={quoteAuthorImageFileUrl}
        quoteAuthorImageFileName={quoteAuthorImageFileName}
        imageFileUrl={imageFileUrl}
        imageFileName={imageFileName}
      />
    </>
  );
};

export default something;
