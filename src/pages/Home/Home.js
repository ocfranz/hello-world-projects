import React from "react";

import { Feed, HomeMain, FeedList } from "./styles";

import Layout from "../../components/Layout";
import Grid from "../../components/Grid";
import Sidebar from "../../modules/Sidebar";
import SearchBar from "../../modules/SearchBar";
import ProjectCard from "../../modules/ProjectCard";
import Header from "../../modules/Header";

const Home = (props) => {
  return (
    <>
      <Header />
      <Layout>
        <Grid.Container>
          <Grid >
            <HomeMain>
              <Feed>
                <SearchBar />
                <FeedList>
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                </FeedList>
              </Feed>
            </HomeMain>
          </Grid>
        </Grid.Container>
      </Layout>
    </>
  );
};

Home.propTypes = {};

export default Home;
