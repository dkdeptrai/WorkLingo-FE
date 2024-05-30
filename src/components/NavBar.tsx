import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/icons/logo.svg?react";
import Search from "../assets/icons/search.svg?react";
import authService from "../services/auth.service";
import { useAuth } from "../contexts/AuthContext";
import DefaultUserIcon from "../assets/icons/default_user_icon.svg?react";

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const { accessToken, setAccessToken } = useAuth();
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user")!)
      : null
  );
  const navigate = useNavigate();

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      const uniqueKey = Date.now();
      navigate(`/search?searchQuery=${searchTerm}&key=${uniqueKey}`, {
        replace: true,
      });
      setSearchTerm("");
    }
  };

  const toggleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleLogout = async () => {
    const token = await authService.logout();
    setAccessToken(token!);
    setUser(null);
  };

  useEffect(() => {
    setUser(
      localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user")!)
        : null
    );
  }, [accessToken]);

  if (user === null && localStorage.getItem("access_token") !== null) {
    return <div>loading</div>;
  }
  return (
    <nav
      className={`bg-white-background flex flex-row justify-start items-center p-1  ${className}`}
    >
      <div className="justify-self-start items-center flex flex-row gap-4 flex-1">
        <Logo
          onClick={() => {
            navigate("/");
          }}
        />
        {user?.role === "ADMIN" ? (
          <>
            <Link to="/manager/users">Users</Link>
            <Link to="/manager/flashcards">Flascards</Link>
            <Link to="/manager/topics">Topics</Link>
            <Link to="/manager/lessons">Lessons</Link>
          </>
        ) : (
          <>
            {/* <Link to="/homepage">Home</Link> */}
            <Link to="/user/lessons">Your Lessons</Link>
          </>
        )}
      </div>
      <div className="justify-self-end items-center flex flex-row gap-4">
        <Search onClick={toggleSearchBar} />
        {showSearchBar && (
          <input
            type="text"
            placeholder="Search for Topics"
            className="search-input"
            onBlur={() => setShowSearchBar(false)}
            onKeyDown={handleKeyDown}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        )}
        <div
          className="flex flex-row items-center gap-2"
          onClick={() => {
            navigate("/profile");
          }}
        >
          {user && user.avatarUrl != null ? (
            <img
              className="object-scale-down h-8 w-8 flex-auto rounded-full"
              src={user.avatarUrl}
              alt="Image"
            />
          ) : (
            <DefaultUserIcon className="h-8 w-8" />
          )}
          {user && <>{`${user.firstname} ${user.lastname}`}</>}
        </div>

        {user ? (
          <button
            className="bg-transparent hover:bg-primary-color text-primary-color font-semibold hover:text-white py-2 px-4 border border-primary-color hover:border-transparent rounded"
            onClick={handleLogout}
          >
            Log Out
          </button>
        ) : (
          <Link to="/login">Sign In</Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
