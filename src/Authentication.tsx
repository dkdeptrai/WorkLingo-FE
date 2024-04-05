import React, { useState } from "react";
import Logo from "./assets/icons/logo.svg?react";

import AuthenticationForm from "./components/AuthenticationForm";

const Authentication: React.FC = () => {
  return (
    <div className="h-screen bg-[url('./assets/icons/bg.svg')] flex flex-col items-center">
      <div className="flex flex-col items-center justify-center flex-grow ">
        <Logo></Logo>
        <div>
          Ant Design is the most influential web design specification in Xihu
          district
        </div>
        <div className="mt-16">
          <AuthenticationForm />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
