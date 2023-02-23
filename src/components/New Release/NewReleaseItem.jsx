import Link from "next/link";
import NewReleaseImage from "./NewReleaseImage";
import NewReleaseInfo from "./NewReleaseInfo";

const NewReleaseItem = ({ image, art, location, artist, links, id }) => {
  return (
    <div className="lg:w-full bg-primary-color border-2 border-light-purple  rounded-[20px] overflow-hidden ">
      <div>
      <Link href={`/new-releases/${id}`}>
        <NewReleaseImage image={image} />
      </Link>
      </div>
      <div className="p-1 h-[12vh]">
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
