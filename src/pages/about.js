import React, { Fragment } from "react";
import { Link } from "gatsby"

import Bio from "../components/bio"
import AboutLayout from "../components/aboutlayout"
import Footer from "../components/footer"

class About extends React.Component {
  render() {
    return (
      <AboutLayout>
        <main>
          <Link to="/projects"></Link>
          <Bio />
        </main>
      </AboutLayout>
    )
  }
}

export default About
