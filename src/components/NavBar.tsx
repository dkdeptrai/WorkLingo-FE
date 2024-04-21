import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/icons/logo.svg?react";
import Languages from "../assets/icons/languages.svg?react";
import Search from "../assets/icons/search.svg?react";
import authService from "../services/auth.service";
import { useAuth } from "../contexts/AuthContext";
import DefaultUserIcon from "../assets/icons/default_user_icon.svg?react";

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const { setAccessToken } = useAuth();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      navigate(`/search?searchQuery=${searchTerm}`);
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
  }, []);

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
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/quiz">Quiz</Link>
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

        {/* <Languages /> */}
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
