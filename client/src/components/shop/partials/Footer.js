import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        style={{background: "black", color: "magenta", height:"40px" }}
        className="bottom-0 w-full z-10 py-2 px-4 md:px-12 text-center"
      >
        <span style={{marginTop:"5px"}}>SHOPINIST © Copyright {moment().format("YYYY")}</span>
      </footer>
    </Fragment>
  );
};

export default Footer;
