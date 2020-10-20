import React from "react";

import {
  Feed,
  HomeMain,
  FeedList,
  Suggestion,
  SuggestionWrapper,
} from "./styles";

import Layout from "../../components/Layout";
import Grid from "../../components/Grid";
import ProjectCard from "../../modules/ProjectCard";
import Header from "../../modules/Header";

const Home = (props) => {
  return (
    <>
      <Header />
      <Layout>
        <Grid.Container>
          <Grid>
            <HomeMain>
              <Feed>
                <FeedList>
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                  <ProjectCard />
                </FeedList>
              </Feed>
              <Suggestion>
                <SuggestionWrapper>ss</SuggestionWrapper>
              </Suggestion>
            </HomeMain>
          </Grid>
        </Grid.Container>
      </Layout>
    </>
  );
};

Home.propTypes = {};

export default Home;
