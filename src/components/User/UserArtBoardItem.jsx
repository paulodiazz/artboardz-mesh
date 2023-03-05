import Link from "next/link";
import ArtBoardInfo from "../ArtBoardz/ArtBoardInfo";
import Image from 'next/image'
import UserArtboardInfo from "./UserArtboardInfo";
const UserArtBoardItem = ({ image, art, location, price, links, id }) => {
  return (
    <li className="w-[302px]   bg-primary-color border-2 border-light-purple rounded-lg overflow-hidden">
      <Link href={`/artboardz/${id}`} className="w-[302px] h-[302px] md:h-[302px] block">
        <Image src={image} alt="/" className="w-full h-full  object-cover object-top" />
      </Link>
      <div className="p-3">
        <UserArtboardInfo
          art={art}
          location={location}
          price={price}
          links={links}
        />
      </div>
    </li>
  );
};

export default UserArtBoardItem;
