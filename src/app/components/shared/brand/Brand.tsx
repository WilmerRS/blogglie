import React from "react";

import { faHive } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class BrandComponent extends React.Component {
  render() {
    return (
      <span className="navbar-brand px-3 center-brand">
        <Link className="navbar-item " to="/home">
          <span className="icon icon-size">
            <FontAwesomeIcon icon={faHive} />
          </span>
          <span className="icon-label pl-3">Blogglie</span>
        </Link>
      </span>
    );
  }
}

export default BrandComponent;
