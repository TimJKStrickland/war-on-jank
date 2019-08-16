
import React from "react"
import Footer from "./footer"

import { rhythm } from "../utils/typography"

class AboutLayout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(0.5)} ${rhythm(3 / 4)} ${rhythm(1)}`,
        }}
      >
        <main>{children}</main>
        <Footer/>
      </div>
    )
  }
}

export default AboutLayout
