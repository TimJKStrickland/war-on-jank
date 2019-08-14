import React, { Fragment } from "react";
import { Link } from "gatsby"

import Bio from "../components/bio"
import Header from "../components/header"

class About extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main>
          <Link to="/projects"></Link>
          <Bio />
        </main>
      </Fragment>
    )
  }
}

export default About
