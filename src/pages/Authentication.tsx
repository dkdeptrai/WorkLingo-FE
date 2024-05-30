import React, { useState } from "react";
import Logo from "../assets/icons/logo.svg?react";

import AuthenticationForm from "../components/AuthenticationForm";

const Authentication: React.FC = () => {
  return (
    <div className="h-screen bg-[url('./assets/icons/bg.svg')] flex flex-col items-center">
      <div className="flex flex-col items-center justify-center flex-grow ">
        <Logo></Logo>
        <div>
          Worklingo is a platform that helps you learn English through flashcard
          and quizs.
        </div>
        <div className="mt-16">
          <AuthenticationForm />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
