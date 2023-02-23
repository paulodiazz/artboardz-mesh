import Link from "next/link";
import ArtBoardInfo from "../ArtBoardz/ArtBoardInfo";
import Image from 'next/image'

const UserArtBoardItem = ({ image, art, location, artist, links, id }) => {
  return (
    <li className="h-30rem bg-primary-color border-2 border-light-purple rounded-lg overflow-hidden">
      <Link href={`/artboardz/${id}`} className=" h-[266px] md:h-[228px] block">
        <Image src={image} alt="/" className="w-full h-full object-cover " />
      </Link>
      <div className="p-3">
        <ArtBoardInfo
          art={art}
          location={location}
          artist={artist}
          links={links}
        />
      </div>
    </li>
  );
};

export default UserArtBoardItem;
