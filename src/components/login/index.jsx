import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import {
  MainWrapper,
  LoginCard,
  TextInput,
  Button,
  PopUpHeader,
  HeaderText,
} from "./styles";
import LoginController from "../../utilities/loginController";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const { history } = props;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) history.push("/dashboard");
  });

  const login = async () => {
    const { data, status } = await LoginController.login({ email });
    if (status === 200) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.email);
      history.push("/dashboard");
    } else alert("login failed");
  };

  return (
    <MainWrapper>
      <LoginCard>
        <PopUpHeader>
          <HeaderText>Login</HeaderText>
        </PopUpHeader>
        <TextInput
          type="text"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onMouseDown={() => login()}>Login</Button>
      </LoginCard>
    </MainWrapper>
  );
};

export default withRouter(Login);
