import styled from "styled-components";
import { media } from "../../styles/minxins";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media.md`
  flex-direction: row;
  padding-top: 22px;
  `}
`;
const CategoriesContainer = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 15px 0px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  ${media.md`
  display : none;
  `}
`;
const ProductsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  ${media.lg`
    .card-left > div{
      margin: 0px 24px 0px 0px !important;
    }
    .card-middle > div{
      margin: 0px 12px !important;
    }
    .card-right > div{
      margin: 0px 0px 0px 24px !important;
    }
  `}
`;

const SidebarContainer = styled.div`
  display: none;
  width: ${(window.innerWidth * 250) / 1440}px;
  padding-right: 70px;
  ${media.md`
  display : block;
  `}
`;
const ProductsContainer = styled.div`
  ${media.md`
  width: calc(100% - ${(window.innerWidth * 250) / 1440}px);
  `}

  button {
    margin: 10px auto 20px auto;
  }
`;

export {
  CategoriesContainer,
  ProductsWrapper,
  SidebarContainer,
  HomeWrapper,
  ProductsContainer,
};
