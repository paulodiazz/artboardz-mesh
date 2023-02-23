import releaseImg from "@/assets/images/new_release.png";
import ArtBoardzItem from "./ArtBoardzItem";

const DUMMY_ARTS = [
  {
    id: "R1",
    image: releaseImg,
    source: "Origins",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
  },
  {
    id: "R2",
    image: releaseImg,
    source: "Origins",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
  },
  {
    id: "R3",
    image: releaseImg,
    source: "Origins",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
  },
  {
    id: "R4",
    image: releaseImg,
    source: "Origins",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
  },
];

const ArtBoardzList = () => {
  return (
    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-2  ">
      {DUMMY_ARTS.map((release) => {
        return (
          <ArtBoardzItem
            key={release.id}
            id={release.id}
            image={release.image}
            art={release.source}
            location={release.location}
            artist={release.author}
          />
        );
      })}
    </ul>
  );
};

export default ArtBoardzList;
