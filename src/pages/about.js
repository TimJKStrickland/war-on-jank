import React, { Fragment } from "react";
import { Link } from "gatsby"

import Bio from "../components/bio"
import Footer from "../components/footer"

class About extends React.Component {
  render() {
    return (
      <Fragment>
        <main>
          <Link to="/projects"></Link>
          <Bio />
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default About
