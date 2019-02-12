import React from "react";
import { graphql, StaticQuery } from "gatsby";
import SimpleTable from "../layouts/simple-table";

const _home = ({ data }) => {
  const menu = {};
  data.allGoogleSheetDrinksMenuRow.edges.forEach(row => {
    menu[row.node.title] = row.node.price;
  });
  return (
    <React.Fragment>
      <div className="app-root">
        <SimpleTable data={menu}/>
      </div>
    </React.Fragment>
  );
};

const Home = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          allGoogleSheetDrinksMenuRow {
            edges {
              node {
                title
                price
              }
            }
          }
        }
      `}
      render={data => <_home data={data} />}
    />
  );
};

export default Home;
