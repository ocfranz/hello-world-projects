import React from "react";
import PropTypes from "prop-types";
import { formatDistance, subDays } from "date-fns";
import {
  ProjectCardStyled,
  ProjectCardWrapper,
  ProjectTitle,
  ProjectCardHeading,
} from "./styles";

const ProjectCard = ({ project }) => {
  return (
    <ProjectCardStyled>
      <ProjectCardWrapper>
        <ProjectCardHeading>
          <img src={project.userThumbnail} />
          <div>
            <span className="projectcard__username">{project.userName}</span>
            <span className="projectcard__date">
              {formatDistance(subDays(new Date("2020-10-1"), 0), new Date())}
               ago
            </span>
          </div>
        </ProjectCardHeading>
        <div>
          <ProjectTitle>{project.title}</ProjectTitle>
        </div>
        <div>
          <span>{project.likes}</span>
          <span>{project.comments}</span>
        </div>
      </ProjectCardWrapper>
    </ProjectCardStyled>
  );
};

ProjectCard.defaultProps = {
  project: {
    id: "hdhdhdhd",
    title: "Todo app using Typescript",
    thumbnail:
      "https://multi-stream-view.herokuapp.com/static/media/assets/images/logo-big.png",
    description: "Simple description",
    tags: ["react", "typescript", "express"],
    likes: 20,
    comments: 10,
    postedDate: new Date().getDate(),
    userThumbnail:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAyNTAzMTA4OTJeQTJeQWpwZ15BbWU3MDA4NDI2Njk@._V1_UX172_CR0,0,172,256_AL_.jpg",
    userName: "Jhon Doe",
  },
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.array,
    postedDate: PropTypes.string,
    likes: PropTypes.number,
    comments: PropTypes.number,
  }),
};

export default ProjectCard;
