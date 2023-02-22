import DiscordIcon from "@/assets/icons/DiscordIcon";
import InstagramIconsOutline from "@/assets/icons/InstagramIconsOutline";
import TwitterIconsOutline from "@/assets/icons/TwitterIconsOutline";

const NewReleaseInfo = ({ art, location, artist, links, artDesc }) => {
  return (
    <div className=" tracking-wide">
      <div className="flex gap-1 items-center justify-between m-2">
        <p className="text-2xl md:text-[20px] font-medium mt-2">{`${art} by ${artist}`}</p>
        
      </div>

      <div className="flex gap-1 items-center justify-between m-2">
        <p className="text-sm"> {`${location.city}, ${location.country}`}</p>
        <div className="flex gap-2 items-center">
        <p className="text-sm">100 A</p>
        </div>
      </div>
      <p className="text-base mt-4">{artDesc}</p>
    </div>
  );
};

export default NewReleaseInfo;
