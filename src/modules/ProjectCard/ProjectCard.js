import React from "react";
import PropTypes from "prop-types";
import { formatDistance, subDays } from "date-fns";
import {
  ProjectCardStyled,
  ProjectCardBody,
  ProjectCardWrapper,
  ProjectCardDetails,
  ProjectTitle,
  ProjectCardHeading,
  ProjectCardFooter,
  ProjectCardFooterItem,
} from "./styles";

import Icon from "../../components/Icon";

const ProjectCard = ({ project }) => {
  return (
    <ProjectCardStyled>
      <ProjectCardWrapper>
        <ProjectCardBody>
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
          <ProjectCardDetails>
            <ProjectTitle>{project.title}</ProjectTitle>
            <p>
              So one of my team mate changed the directories of our files, I'm
              not sure if he just moved our files or created a new one and copy
              pasted the code to that new file. But now some of our files lost
              all of it's commit history, and there is only one commit. How can
              I restore the commits history even though the directory has
              changed or he copy pasted the code to new files with the same
              name.
            </p>
          </ProjectCardDetails>
          <ProjectCardFooter>
            <ProjectCardFooterItem>
              <div className="card__button">
                <Icon iconName="like" color="#AFB6ED" size={20} />
              </div>
              <span>{project.likes} Likes</span>
            </ProjectCardFooterItem>
            <ProjectCardFooterItem>
              <div className="card__button">
                <Icon iconName="comment" color="#AFB6ED" size={20} />
              </div>
              <span>{project.comments} Comments</span>
            </ProjectCardFooterItem>
          </ProjectCardFooter>
        </ProjectCardBody>
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
