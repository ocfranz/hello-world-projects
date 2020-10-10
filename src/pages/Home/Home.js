import React from "react";

import { Feed } from "./styles";

import Layout from "../../components/Layout";
import Sidebar from "../../modules/Sidebar";

const Home = (props) => {
  return (
    <>
      <Layout>
        <Sidebar></Sidebar>
        <Feed></Feed>
      </Layout>
    </>
  );
};

Home.propTypes = {};

export default Home;
