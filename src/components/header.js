import React from "react";

import { Link, graphql, useStaticQuery } from 'gatsby';
import { rhythm, scale } from "../utils/typography"

const Header = () => {
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
    <header
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`}}>
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
          Who runs this?
        </Link>
      </h1>
    </header>
  )
}

export default Header