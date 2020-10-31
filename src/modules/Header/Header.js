import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { TOGGLE_LOGIN_MODAL } from "../../constants";
import {
  HeaderStyled,
  HeaderWrapper,
  HeaderNav,
  UserAvatarWrapper,
  CreatePost,
} from "./styles";
import Icon from "../../components/Icon";
import Brand from "../../components/Brand";
import Button from "../../components/Button";
import SearchBar from "../../modules/SearchBar";
import UserAvatar from "../../components/UserAvatar";

const Header = (props) => {
  const dispatch = useDispatch();
  const userAuth = useSelector(
    (state) => state.userReducer.isAuthenticated,
    shallowEqual
  );
  console.log(userAuth);
  const onOpenModalCreate = () => {};

  const onOpenModalLogin = () => {
    dispatch({ type: TOGGLE_LOGIN_MODAL, payload: true });
  };

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
                    <a onClick={onOpenModalLogin}>Login</a>
                  </li>
                  <li>
                    <Button children="Join us" handleOnClick={() => {}} />
                  </li>
                </>
              )}

              {userAuth && (
                <>
                  <li>
                    <CreatePost>
                      <button onClick={onOpenModalCreate}>
                        <Icon iconName="create" color="#ffffff" />
                      </button>
                    </CreatePost>
                  </li>
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
