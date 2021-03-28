import React from "react";
import "./Header.scss";

import BrandComponent from "../brand/Brand";

/* Iconos */
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class HeaderComponent extends React.Component {
  state = { active: false };

  handleClick = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  };

  isActive(): boolean {
    const { active } = this.state;
    return active;
  }

  render() {
    return (
      <div className="sticky-header header">
        <div className="container my-2">
          <nav className="navbar is-transparent">
            <div className="navbar-brand px-3">
              <BrandComponent />
              <div
                className={`navbar-burger burger${
                  this.isActive() ? "is-active" : ""
                }`}
                onClick={this.handleClick}
                data-target="navbarExampleTransparentExample"
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div
              id="navbarExampleTransparentExample"
              className={`navbar-menu ${this.isActive() ? "is-active" : ""} content `}
            >
              <div className="navbar">
                <div className="navbar-item">
                  <Link className="button is-light navbar-item-green " to="/">
                    <span className="icon cl-icon">
                      <FontAwesomeIcon icon={faHome} />
                    </span>
                    <span className="cl-navbar-label">Inicio</span>
                  </Link>
                </div>
              </div>
              <div className="navbar">
                <div className="navbar-item">
                  <Link to="/contact-us" className="button is-light navbar-item-orange">
                    <span className="icon cl-icon">
                      <FontAwesomeIcon icon={faFeather} />
                    </span>
                    <span className="cl-navbar-label">Contáctanos</span>
                  </Link>
                </div>
              </div>
              <div className="navbar">
                <div className="navbar-item">
                  <Link
                    className="button is-light navbar-item-purple "
                    to="/help"
                  >
                    <span className="icon cl-icon">
                      <FontAwesomeIcon icon={faQuestionCircle} />
                    </span>
                    <span className="cl-navbar-label">Ayuda</span>
                  </Link>
                </div>
              </div>

              <div className="navbar-end">
                <div className="navbar-item">
                  <div className="field is-grouped">
                    <p className="control">
                      <a className="bd-tw-button button" href="/">
                        <span>Inicia sesión</span>
                      </a>
                    </p>
                    <p className="control">
                      <a className="button is-primary" href="/">
                        <span>Registrate</span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
