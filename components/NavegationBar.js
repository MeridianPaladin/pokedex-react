import React from "react";
import BackButton from "./BackButton";
import Logo from "./Logo";
import BurgerMenu from "./BurgerMenu";

const NavegationBar = ({ backUrl, canBack, color }) => {
  return (
    <nav className="flex w-full h-14 justify-between items-center px-4 mb-6">
      {canBack && <BackButton backUrl={backUrl} color={color} />}
      <Logo />
      <BurgerMenu />
    </nav>
  );
};

export default NavegationBar;
