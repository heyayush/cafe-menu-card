import * as React from "react";
import "../../styles/main.scss";
import Head from "../../components/head";
import TableHeader from "./table-header";

const SimpleTable = ({ data }) => {
  const menu = data;
  const menuItems = () => {
    return Object.entries(menu).map(([title, price], index) => {
      return (
        <li key={index} className="row">
          <span className="col1">{title}</span>
          <span className="col2">{price}</span>
        </li>
      );
    });
  };
  return (
    <React.Fragment>
      <Head />
      <div className="table-container">
        <TableHeader />
        <ul>{menuItems()}</ul>
      </div>
    </React.Fragment>
  );
};

export default SimpleTable;
