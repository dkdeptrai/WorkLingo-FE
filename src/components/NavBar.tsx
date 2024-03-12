import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/icons/logo.svg?react";
import Languages from "../assets/icons/languages.svg?react";
import Search from "../assets/icons/search.svg?react";

interface NavBarProps {
  className?: string;
}

const NavBar: React.FC<NavBarProps> = ({ className }) => {
  return (
    <nav
      className={`flex flex-row justify-start items-center p-1 ${className}`}
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
      </div>
    </nav>
  );
};

export default NavBar;
