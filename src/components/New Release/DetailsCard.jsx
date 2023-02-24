import { Box } from "@mui/material";
import Image from "next/image";
import { SocialIcons } from "../Layouts/SocialIcons";



export const DetailsCard = ({ image, title, desc, art, artist, desc2, desc3 }) => {
  return (
    <div>
      <div className="grid grid-cols-2 grid-rows-1">
        <div>
      {image && (
          <Image src={image} alt=""  className="w-full ml-[8px]" />
      )}
      </div>
      <div className="justify-center">
        <div className="flex flex-row content-center">
          <p className="text-2xl md:text-[36px] font-medium ml-6 mb-6">{`${art} by ${artist}`}</p>
          <div className="mt-2 ml-4">
          <SocialIcons />
          </div> 
        </div>
      {desc && <p className="text-base md:text-xl  m-6">{desc}</p>}
      {desc2 && <p className="text-base md:text-xl  m-6">{desc2}</p>}
      {desc3 && <p className="text-base md:text-xl  m-6">{desc3}</p>}
      </div>
      </div>
    </div>
  );
};
