import React, { useState, useEffect } from 'react';

import { Card, Container, Row } from 'reactstrap';
import { FaQuoteRight } from 'react-icons/fa';

const getQuote = () => {
  let randIndex = Math.floor(Math.random() * 1600);
  return fetch('https://type.fit/api/quotes')
    .then((response) => response.json())
    .then((data) => data[randIndex]);
};

const BlogPostImageWText = ({ imageFileUrl, imageFileName }) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    getQuote().then((quote) => setState(quote));
  }, []);

  return (
    <div className="cd-section" id="testimonials">
      <div className="testimonials-3">
        <Container>
          <Row>
            <div
              className="carousel slide carousel-team"
              id="carousel-testimonials3"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="info text-left bg-danger">
                    <div className="icon icon-white">
                      <FaQuoteRight />
                    </div>
                    <p className="description text-white">{state.text}</p>
                    <div className="author">
                      <img
                        alt="Default author avatar"
                        className="avatar img-raised"
                        src={require('assets/img/p10.jpg')}
                      />
                      <span>{state.author ? state.author : 'Anonymous'}</span>
                    </div>
                  </div>
                  <Card
                    className="card-blog card-background"
                    data-animation={true}
                  >
                    <div
                      alt={imageFileName}
                      className="full-background"
                      style={{
                        backgroundImage: 'url(' + imageFileUrl + ')',
                      }}
                    />
                  </Card>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default BlogPostImageWText;
