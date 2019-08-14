import React from "react";

import { graphql, useStaticQuery } from 'gatsby';
import Image from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(absolutePath: { regex: "/header-icon/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <header>
      <Image
        fixed={data.file.childImageSharp.fixed}
        alt={`War on Jank logo`}
        style={{
          minWidth: 50,
          minHeight: 50,
          margin: `0 auto`,
          borderRadius: `100%`,
          display:`block`,
        }}
      />
    </header>
  )
}

export default Header