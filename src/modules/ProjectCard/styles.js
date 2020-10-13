import styled from "styled-components";
import { remy } from "../../styles/functions";
import { Pointer } from "../../styles/utils";

const ProjectCardStyled = styled.div`
  width: 100%;
  margin-bottom: ${remy(15)};
  border-radius: ${remy(5)};
`;

const ProjectCardWrapper = styled.div`
  background-color: #2e3141;
  ${Pointer}
`;

const ProjectCardBody = styled.div`
  padding: ${remy(15)} ${remy(30)} ${remy(10)} ${remy(30)};
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
  padding: 0rem 0rem ${remy(20)} 0rem;
  img {
    width: ${remy(45)};
    height: ${remy(45)};
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

const ProjectCardFooter = styled.div`
  display: flex;
  padding: ${remy(20)} 0rem ${remy(10)} 0rem;
`;

const ProjectCardFooterItem = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${remy(15)};
  .card__button {
    ${Pointer}
    display : flex;
    padding: 5px;
    border-radius: 50%;
    display: flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #1d1f2c;
    }
  }
  span {
    font-size: ${remy(14)};
  }
`;

export {
  ProjectCardStyled,
  ProjectCardWrapper,
  ProjectCardBody,
  ProjectTitle,
  ProjectCardHeading,
  ProjectCardFooter,
  ProjectCardFooterItem,
};
