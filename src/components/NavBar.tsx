import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.svg?react";
import Languages from "../assets/icons/languages.svg?react";
import Search from "../assets/icons/search.svg?react";
import authService from "../services/auth.service";
import { useAuth } from "../contexts/AuthContext";

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  const { setAccessToken } = useAuth();

  const handleLogout = async () => {
    const token = await authService.logout();
    setAccessToken(token!);
  };
  return (
    <nav
      className={`bg-white-background flex flex-row justify-start items-center p-1  ${className}`}
    >
      <div className="justify-self-start items-center flex flex-row gap-4 flex-1">
        <Logo />
        <Link to="/">Home</Link>
        <Link to="/topics">Topics</Link>
        <Link to="/quiz">Quiz</Link>
        {/* Add more links as needed */}
      </div>
      <div className="justify-self-end items-center flex flex-row gap-4">
        <Search />
        <img
          className="object-scale-down h-8 w-8 flex-auto rounded-full"
          src="https://picsum.photos/200"
          alt="Image"
        />
        <Languages />
        <button
          className="bg-transparent hover:bg-primary-color text-primary-color font-semibold hover:text-white py-2 px-4 border border-primary-color hover:border-transparent rounded"
          onClick={handleLogout}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
