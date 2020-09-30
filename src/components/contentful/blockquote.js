import React from 'react'

const BlockQuote = ({ quoteText, quoter }) => {
  return (
    <blockquote>
      <div>{`"${quoteText}"`}</div>
      {quoter ? (
        <footer>
          <cite>{quoter}</cite>
        </footer>
      ) : null}
    </blockquote>
  )
}

export default BlockQuote
