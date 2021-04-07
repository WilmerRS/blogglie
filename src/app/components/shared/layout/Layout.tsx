import React from "react";

import './Layout.scss';

import FooterComponent from "../footer/Footer";
import HeaderComponent from "../header/Header";


const Layout = (props: { children: any }) => {
  return (
    <>
      <HeaderComponent />
      <div className="display-footer-fixed wrapper p-header-fixed"> {props.children} </div>
      <FooterComponent />
    </>
  );
};

export default Layout;
