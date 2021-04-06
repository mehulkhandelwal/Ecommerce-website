import React, { Fragment } from "react";
import moment from "moment";

const AdminFooter = (props) => {
  return (
    <Fragment>
      <footer
        style={{background:"#2F4F4F", color: "white" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
        SHOPINIST © Copyright {moment().format("YYYY")}
      </footer>
    </Fragment>
  );
};

export default AdminFooter;
