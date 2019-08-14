import React from "react";

import { Link, graphql, useStaticQuery } from 'gatsby';
import { rhythm, scale } from "../utils/typography"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const { title } = data.site.siteMetadata
  return (
    <footer
      style={{
        borderTop: `1px solid rgba(33,33,233,0.2)`,
        paddingTop: `${rhythm(1)}`
      }}>
      <div
        style={{
          display: `flex`,
          flexDirection: `flex-column`,
          justifyContent: `space-between`,
          alignItems: `center`
        }}>
        <h1
          style={{
            ...scale(0.625),
            marginBottom: rhythm(0.75),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >{title}
          </Link>
        </h1>
        <h1
          style={{
            ...scale(0.625),
            marginBottom: rhythm(0.75),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/about`}
          >
            About
          </Link>
        </h1>
      </div>
      {` `}
      <p
        style={{
        }}
      >
        © {new Date().getFullYear()} TIMJKSTRICKLAND, <a href="https://www.gatsbyjs.org">Gatsby Powered</a>
      </p>
      {` `}
    </footer>
  )
}

export default Footer