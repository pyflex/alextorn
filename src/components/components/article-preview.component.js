/*!

=========================================================
* BLK Design System PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from 'react';

// nodejs library that concatenates classes
import classnames from 'classnames';
// reactstrap components
import { Button, Card, CardBody, CardFooter, CardTitle, Col } from 'reactstrap';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const ArticlePreview = ({ article }) => {
  return (
    <Col lg="4" md="6">
      <Card className="card-blog card-plain">
        <div className="card-image">
          <Link to={article.slug}>
            <Img
              alt="..."
              className="img rounded"
              style={{ height: '100%' }}
              imgStyle={{ objectFit: 'cover' }}
              fluid={article.featureImage.fluid}
            />
          </Link>
        </div>
        <CardBody>
          <h6 className="category text-primary">{article.tag.tag}</h6>
          <CardTitle tag="h4">
            <Link to={article.slug}>{article.title}</Link>
          </CardTitle>
          <p className="card-description">{article.description.description}</p>
          <CardFooter>
            <div className="author">
              <Img
                alt={article.author.authorImage.file.fileName}
                className="avatar img-raised"
                fluid={article.author.authorImage.fluid}
              />
              <span className="ml-1">{article.author.name}</span>
            </div>
            <div className="stats stats-right">
              <i className="tim-icons icon-watch-time" /> 5 min read
            </div>
          </CardFooter>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ArticlePreview;
