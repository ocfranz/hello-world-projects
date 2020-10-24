import React from "react";
import { useSelector } from "react-redux";

import {
  Feed,
  HomeMain,
  FeedList,
  Suggestion,
  SuggestionWrapper,
} from "./styles";

import Layout from "../../components/Layout";
import Grid from "../../components/Grid";
import CreatePostCard from "../../components/CreatePostCard";
import ProjectCard from "../../modules/ProjectCard";
import Header from "../../modules/Header";
import ModalLogin from "../../modules/ModalLogin";
const Home = (props) => {
  const visibleLogin = useSelector(
    (state) => state.uiReducer.visibleLoginModal
  );
  return (
    <>
      <Header />
      <Layout>
        <Grid.Container>
          <Grid>
            <HomeMain>
              <Feed>
                <FeedList>
                  <CreatePostCard />
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
      <ModalLogin visible={visibleLogin} />
    </>
  );
};

Home.propTypes = {};

export default Home;
