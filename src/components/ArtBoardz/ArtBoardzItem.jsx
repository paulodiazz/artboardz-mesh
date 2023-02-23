import Link from "next/link";
import ArtBoardzInfo from "./ArtBoardInfo";
import Image from 'next/image'

const ArtBoardzItem = ({ image, art, location, artist, links, id }) => {
  return (
    <li className="h-30rem bg-primary-color border-2 border-light-purple rounded-lg overflow-hidden">
      <Link href={`/artboardz/${id}`} className=" h-[266px] md:h-[228px] block">
        <Image src={image} alt="/" className="w-full h-full object-cover " />
      </Link> 
      <div className="p-4">
        <ArtBoardzInfo
          art={art}
          location={location}
          artist={artist}
          links={links}
        />
      </div>
      {/* <button className="bg-active-link rounded-md p-2 font-semibold w-11/12 mx-auto block tracking-wide text-base my-4">
        Floor: 340
      </button> */}
    </li>
  );
};

export default ArtBoardzItem;
