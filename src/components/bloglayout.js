
import React from "react"
import Footer from "./footer"

import { rhythm } from "../utils/typography"

class BlogLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <main>{children}</main>
        <footer>
          <Footer/>
          {` `}
          © {new Date().getFullYear()} TIMJKSTRICKLAND,
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby Powered</a>
        </footer>
      </div>
    )
  }
}

export default BlogLayout
