import styled from "styled-components";
import { remy } from "../../styles/functions";
import { Pointer } from "../../styles/utils";

const ProjectCardStyled = styled.div`
  width: 100%;
  margin-bottom: ${remy(15)};
  border-radius: ${remy(5)};
`;

const ProjectCardWrapper = styled.div`
  background-color: #010815;
  border-radius: 5px;
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
      line-height: 17px;
    }
    .projectcard__date {
      font-size: 13px;
      opacity: 0.6;
      font-size: 15px;
    }
  }
`;

const ProjectCardDetails = styled.div`
  p {
    font-size: 16px;
    line-height: 24px;
    overflow: hidden;
    opacity: 0.7;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
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
  ProjectCardDetails,
  ProjectTitle,
  ProjectCardHeading,
  ProjectCardFooter,
  ProjectCardFooterItem,
};
