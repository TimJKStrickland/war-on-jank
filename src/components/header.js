import React from "react";

import { Link } from 'gatsby';
import Icon from "../../content/assets/header-icon.svg";

const Header = () => {

  return (
    <header>
      <Link 
        to={`/`} 
        style={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          boxShadow: `none`
        }}>
        <Icon />
      </Link>
      <div style={{
        display: `none`
      }}>Icons made by <a href="https://www.flaticon.com/authors/creaticca-creative-agency" title="Creaticca Creative Agency">Creaticca Creative Agency</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </header>
  )
}

export default Header