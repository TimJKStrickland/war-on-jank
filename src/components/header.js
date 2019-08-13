import React from "react";

import { Link } from 'gatsby';


const Header = () => {
  return (
    <div
      style={{
        display: `flex`}}>
      <Link to="/">The War On Jank</Link>
      <Link to="/about">Who runs this?</Link>
    </div>
  )
}

export default Header