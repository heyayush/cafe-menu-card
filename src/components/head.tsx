import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import { withPrefix } from 'gatsby';

const _head = ({ data }) => {
  const { site } = data;
  const title = `${site.siteMetadata.title}`;
  const favicon = site.siteMetadata.favicon;
  return (
    <Helmet>
      <title>{title}</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content={site.siteMetadata.author} />
      <link rel="shortcut icon" type="image/png" href={withPrefix(favicon)} />
    </Helmet>
  );
};

const Head = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            favicon
          }
        }
      }
    `}
    render={data => <_head data={data} />}
  />
);

export default Head;
