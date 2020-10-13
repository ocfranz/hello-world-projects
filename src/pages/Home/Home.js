import React from "react";

import { Feed, FeedList } from "./styles";

import Layout from "../../components/Layout";
import Sidebar from "../../modules/Sidebar";
import SearchBar from "../../modules/SearchBar";
import ProjectCard from "../../modules/ProjectCard";

const Home = (props) => {
  return (
    <>
      <Layout>
        <Sidebar></Sidebar>
        <Feed>
          <SearchBar />
          <FeedList>
            <ProjectCard />
            <ProjectCard />
          </FeedList>
        </Feed>
      </Layout>
    </>
  );
};

Home.propTypes = {};

export default Home;
