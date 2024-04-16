import React, { useState } from "react";
import AuthService from "../services/auth.service";
import TextBoxComponent from "./TextBoxComponent";
import UserIcon from "../assets/icons/user.svg?react";
import PasswordIcon from "../assets/icons/password.svg?react";
import GoogleIcon from "../assets/icons/google.svg?react";
import { Tab, initTWE } from "tw-elements";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

initTWE({ Tab });
const AuthenticationForm: React.FC = () => {
  const { setAccessToken } = useAuth();
  const [activeTab, setActiveTab] = useState("SignIn");
  const location = useLocation();
  const navigate = useNavigate();
  const { from } = location.state || { from: { pathname: "/" } };
  // login states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // sign up states
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const token = await AuthService.login(email, password);
      setAccessToken(token!);
      navigate(from.pathname, { replace: true });
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    const token = await AuthService.register(
      firstName,
      lastName,
      email,
      password
    );
    setAccessToken(token!);
    navigate(from.pathname, { replace: true });
  };

  return (
    <div className="">
      <ul
        className="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0"
        role="tablist"
        data-twe-nav-ref
      >
        <li role="presentation">
          <a
            href="#tabs-sign-in"
            className={`my-2 block border-x-0 border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight ${
              activeTab === "SignIn"
                ? "text-primary-color border-primary-color"
                : "text-neutral-500 border-transparent"
            } hover:isolate hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary`}
            data-twe-toggle="pill"
            data-twe-target="#tabs-sign-in"
            data-twe-nav-active
            role="tab"
            aria-controls="tabs-sign-in"
            onClick={() => {
              setActiveTab("SignIn");
            }}
          >
            Sign In
          </a>
        </li>
        <li role="presentation">
          <a
            href="#tabs-sign-up"
            className={`my-2 block border-x-0 border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight ${
              activeTab === "SignUp"
                ? "text-primary-color border-primary-color"
                : "text-neutral-500 border-transparent"
            } hover:isolate hover:bg-neutral-100 focus:isolate focus:border-transparent data-[twe-nav-active]:border-primary data-[twe-nav-active]:text-primary dark:text-white/50 dark:hover:bg-neutral-700/60 dark:data-[twe-nav-active]:text-primary`}
            data-twe-toggle="pill"
            data-twe-target="#tabs-sign-up"
            role="tab"
            aria-controls="tabs-sign-up"
            onClick={() => {
              setActiveTab("SignUp");
            }}
          >
            Sign Up
          </a>
        </li>
      </ul>

      <div className="mb-6">
        {activeTab === "SignIn" && (
          <div
            className="opacity-100 transition-opacity duration-150 ease-linear w-full"
            id="tabs-sign-in"
            role="tabpanel"
            aria-labelledby="tabs-sign-in-tab"
          >
            {/* Form content */}
            <form onSubmit={handleSignIn} className="flex flex-col gap-y-7">
              <TextBoxComponent
                type="text"
                name="username"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <div className="flex flex-row gap-2">
                <input type="checkbox" name="rememberMe" id="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
                <a href="#tabs-forgot-password" className="ml-auto">
                  Forgot your password?
                </a>
              </div>

              <button
                className="bg-primary-color text-white py-2"
                type="submit"
              >
                Sign In
              </button>
              <div className="flex flex-row items-center justify-center gap-x-4 bg-white text-primary-text-color border border-1 border-primary-border-color py-2">
                <GoogleIcon />
                <span>Sign in with Google</span>
              </div>
              <div>
                Don't have an account?{" "}
                <a href="#tabs-sign-up" onClick={() => setActiveTab("SignUp")}>
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        )}
        {activeTab === "SignUp" && (
          <div
            className="opacity-100 transition-opacity duration-150 ease-linear w-full"
            id="tabs-sign-up"
            role="tabpanel"
            aria-labelledby="tabs-sign-up-tab"
          >
            {/* Form content */}
            <form onSubmit={handleSignUp} className="flex flex-col gap-y-7">
              <div className="flex flex-row gap-4">
                <TextBoxComponent
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  icon={<UserIcon />}
                />
                <TextBoxComponent
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  icon={<UserIcon />}
                />
              </div>
              <TextBoxComponent
                type="text"
                name="username"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <TextBoxComponent
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                icon={<PasswordIcon />}
              />
              <button
                className="bg-primary-color text-white py-2"
                type="submit"
              >
                Sign Up
              </button>
              <div className="flex flex-row items-center justify-center gap-x-4 bg-white text-primary-text-color border border-1 border-primary-border-color py-2">
                <GoogleIcon />
                <span>Sign in with Google</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthenticationForm;
