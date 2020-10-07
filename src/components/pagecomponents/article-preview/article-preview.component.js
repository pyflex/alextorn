import React from 'react'
import Img from 'gatsby-image'

const ArticlePreview = ({ article }) => {
  return (
    <div>
      <div>
        <h3>{article.title}</h3>
        <p>{article.description.description}</p>
      </div>

      <div>
        <p>Författare: {article.author.name}</p>
        <Img
          style={{ maxWidth: '300px' }}
          alt={article.author.authorImage.file.fileName}
          fluid={article.author.authorImage.fluid}
        />
        <p>Uppdaterad senast {article.updatedAt}</p>
      </div>
    </div>
  )
}

export default ArticlePreview
