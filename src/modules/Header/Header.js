import React from "react";
import { useSelector, shallowEqual } from "react-redux";

import {
  HeaderStyled,
  HeaderWrapper,
  HeaderNav,
  UserAvatarWrapper,
} from "./styles";
import Brand from "../../components/Brand";
import Button from "../../components/Button";
import SearchBar from "../../modules/SearchBar";
import UserAvatar from "../../components/UserAvatar";

const Header = (props) => {
  const userAuth = useSelector((state) => state.userReducer.auth, shallowEqual);
  return (
    <>
      <HeaderStyled>
        <HeaderWrapper>
          <Brand />
          <HeaderNav>
            <ul>
              <li>
                <SearchBar />
              </li>
              {!userAuth && (
                <>
                  <li>
                    <a href="/">Login</a>
                  </li>
                  <li>
                    <Button children="Join us" handleOnClick={() => {}} />
                  </li>
                </>
              )}

              {userAuth && (
                <>
                  <li>
                    <UserAvatarWrapper>
                      <div>Username</div>
                      <UserAvatar type="semi-rounded" />
                    </UserAvatarWrapper>
                  </li>
                </>
              )}
            </ul>
          </HeaderNav>
        </HeaderWrapper>
      </HeaderStyled>
      <div></div>
    </>
  );
};

export default React.memo(Header);
