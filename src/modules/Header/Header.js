import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
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
import { toggleModalLogin } from "../../actions/uiTypes";

const Header = (props) => {
  const dispatch = useDispatch();
  const userAuth = useSelector(
    (state) => state.user.isAuthenticated,
    shallowEqual
  );
  const onOpenModalCreate = () => {};

  const onOpenModalLogin = () => {
    dispatch(toggleModalLogin(true));
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
