import React, { useState } from "react";
import * as Yup from "yup";
import AuthService from "./services/auth.service";
import TextBoxComponent from "./components/TextBoxComponent";

import UserIcon from "./assets/icons/user.svg?react";
import PasswordIcon from "./assets/icons/password.svg?react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    AuthService.login(username, password).then(
      () => {
        console.log("Login successful");
      },
      (error) => {
        console.log("Login failed");
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-y-7">
      <TextBoxComponent
        type="text"
        name="username"
        placeholder="Email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        icon={<UserIcon />}
      />
      <TextBoxComponent
        type="password"
        name="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        icon={<PasswordIcon />}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
