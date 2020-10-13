import styled from "styled-components";
const ProjectCardStyled = styled.div`
  width: 100%;
  padding: 10px 30px;
`;

const ProjectCardWrapper = styled.div`
  margin: 10px 0px;
`;

const ProjectTitle = styled.div`
  font-size: 18px;
  line-height: 20px;
  display: block;
  font-weight: bold;
`;

const ProjectCardHeading = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 0px 20px 0px;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    .projectcard__username {
      font-size: 15px;
      font-weight: bold;
      opacity: 0.6;
    }
    .projectcard__date {
      font-size: 13px;
      opacity: 0.6;
      margin-top: 5px;
    }
  }
`;

export {
  ProjectCardStyled,
  ProjectCardWrapper,
  ProjectTitle,
  ProjectCardHeading,
};
