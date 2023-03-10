import { useState } from "react";
import EditIcon from "@/assets/icons/EditIcon";
import TwitterIconsOutline from "@/assets/icons/TwitterIconsOutline";
import Avatar from "./Avatar";
import ProfileEditForm from "./ProfileEditForm";
import Link from "next/link";

const MainProfile = ({ image, username, location }) => {
  const [editProfileIsShown, setEditProfileIsShown] = useState(false);

  const toggleProfileEditFormHandler = () => {
    setEditProfileIsShown((oldState) => !oldState);
  };

  return (
    <div className="bg-primary-color p-4 text-white font-Montserrat flex gap-5 items-center tracking-wide relative">
      <div className="w-[120px] h-[120px] rounded-full relative">
        <Avatar image={image} username={username} />
        <button
          onClick={toggleProfileEditFormHandler}
          className="w-[32px] aspect-square bg-[#0E1528] rounded-full absolute top-2/3 right-0 flex items-center justify-center"
        >
          <EditIcon />
        </button>
      </div>
      <div>
      <div className="flex gap-x-4">
      <p className="text-xl font-semibold">{username}</p>
        <Link href="/">
          <TwitterIconsOutline className="mt-[6px]"/>
        </Link>
        </div>
        <p className="text-base font-medium">{`${location.city}, ${location.country}`}</p>
      </div>
      
      {editProfileIsShown && (
        <ProfileEditForm onCloseForm={toggleProfileEditFormHandler} />
      )}
    </div>
  );
};

export default MainProfile;
