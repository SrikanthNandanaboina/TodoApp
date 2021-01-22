import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import { MainWrapper, LoginCard, TextInput, Button } from "../styles";

const Login = (props) => {
  useEffect(() => {
    const { history } = props;
    const token = localStorage.getItem("token");
    if (token) history.push("/dashboard");
  });

  return (
    <MainWrapper>
      <LoginCard>
        <TextInput type="text" placeholder="Id" />
        <TextInput type="text" placeholder="Name" />
        <Button>Login</Button>
      </LoginCard>
    </MainWrapper>
  );
};

export default withRouter(Login);
