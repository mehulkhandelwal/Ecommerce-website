import React, { Fragment } from "react";
import moment from "moment";

const Footer = (props) => {
  return (
    <Fragment>
      <footer
        style={{background: "black", color: "magenta" }}
        className="fixed bottom-0 w-full z-10 py-6 px-4 md:px-12 text-center"
      >
        SHOPINIST © Copyright {moment().format("YYYY")}
      </footer>
    </Fragment>
  );
};

export default Footer;
