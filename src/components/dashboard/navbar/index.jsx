import React from "react";
import { withRouter } from "react-router-dom";
import {
  Name,
  NavbarWrapper,
  UserDataWrapper,
  ProfileIcon,
  Image,
  Logout,
} from "./styles";

const NavBar = (props) => {
  const email = localStorage.getItem("email");

  const handleLogout = () => {
    console.log("logout");
    const { history } = props;
    localStorage.clear();
    history.push("/");
  };

  return (
    <NavbarWrapper>
      <UserDataWrapper>
        <ProfileIcon>
          <Image
            src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            alt="logo"
          />
        </ProfileIcon>
        <Name>{email}</Name>
      </UserDataWrapper>
      <Logout onMouseDown={() => handleLogout()}>Logout</Logout>
    </NavbarWrapper>
  );
};

export default withRouter(NavBar);
