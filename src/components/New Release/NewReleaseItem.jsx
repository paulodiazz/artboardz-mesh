import Link from "next/link";
import NewReleaseImage from "./NewReleaseImage";
import NewReleaseInfo from "./NewReleaseInfo";

const NewReleaseItem = ({ image, art, location, artist, links, id }) => {
  return (
    <div className="mb-[16px] sm:mb-[0px] sm:w-full bg-primary-colorborder border border-light-purple  rounded-[10px] sm:rounded-[20px] overflow-hidden ">
      <div>
      <Link href={`/new-releases/${id}`}>
        <NewReleaseImage image={image} />
      </Link>
      </div>
      <div className="items-center sm:h-[12vh] sm:w-full">
        <NewReleaseInfo
          art={art}
          location={location}
          artist={artist}
          links={links}
        />
      </div>
    </div>
  );
};

export default NewReleaseItem;
 