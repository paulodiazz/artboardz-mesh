import React from "react";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import DiscordIcon from "@/assets/icons/DiscordIcon";
import WebIcon from "@/assets/icons/WebIcon";
//Probably we will have to change <a> for NextLink
export const SocialIcons = () => {
  return (
    <div className="flex gap-2">
      <a to="/">
        <TwitterIcon />
      </a>
      <a to="/">
        <DiscordIcon />
      </a>
      <a to="/">
        <WebIcon />
      </a>
    </div>
  );
};
