import React from "react";
import { useDispatch } from "react-redux";
import { CardanoWallet} from "@meshsdk/react";

import { Bars3Icon } from "@heroicons/react/24/solid";
import UserBalance from "../User/UserBalance";
import HeaderProfile from "../User/HeaderProfile";
import { Logo } from "./Logo";
import { UIAction } from "../../store/redux-slices/UI-slice";



const Header = () => {
  const dispatch = useDispatch();

  const navbarToggleHandler = () => {
    dispatch(UIAction.toggleNavbar());
  };
  return (
    <header
      className={`bg-primary-color w-full header flex gap-2 px-4 py-5 items-center justify-between`}
    >
      <div className="flex gap-4 sm:hidden">
        <button onClick={navbarToggleHandler}>
          <Bars3Icon className="w-8 text-white" />
        </button>
        <Logo />
      </div>
      <div className="z-40 text-[#FFFFFF] flex items-center gap-2 ml-auto">
        <CardanoWallet/>
        <HeaderProfile />
      </div>
    </header>
  );
};
export default Header;
