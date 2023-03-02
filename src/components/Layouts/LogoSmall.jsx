import React from "react";
import LogoImg from "@/assets/images/Logo.png";
import Image from 'next/image'
// className = "w-full"
export const LogoSmall = () => {
  return <Image src={LogoImg} alt="Artboardz Logo" width={'125'} />;
};
