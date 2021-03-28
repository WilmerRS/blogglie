import React from "react";
import "./Footer.scss";

import BrandComponent from "../brand/Brand";

import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class FooterComponent extends React.Component {
  private getCurrentYear() {
    let date = new Date();
    return date.getFullYear();
  }
  render() {
    return (
      <footer className="bg-footer footer">
        <div className="container content has-text-centered">
          <nav className="">
            <Link to="/" className="px-4 inline-block foot-nav">
              Inicio
            </Link>
            <Link to="/contact-us" className="px-4 inline-block foot-nav">
              Contáctanos
            </Link>
            <Link to="/" className="px-4 inline-block foot-nav">
              Ayuda
            </Link>
          </nav>
          <div className=" py-4">
            <a
              href="/"
              className="subtitle is-4 p-3 faFacebook cl-icon-network "
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="/"
              className="subtitle is-4 p-3 faInstagram cl-icon-network "
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="/" 
              className="subtitle is-4 p-3 faTwitter cl-icon-network "
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="/" className="subtitle is-4 p-3 faGithub cl-icon-network ">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="pb-3">
              <strong>Blogglie</strong> es un blog para desarrolladores de
              software y amantes del mundo de la informática.
            <p>
              <strong>¡Aprendamos juntos!</strong>
            </p>
          </div>
          <div className="inline-block">
            <BrandComponent />
          </div>
          <div className="pb-4">
            <p> &copy; Blogglie {this.getCurrentYear()}</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterComponent;
