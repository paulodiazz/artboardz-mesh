import NewReleaseList from "../../New Release/NewReleaseList";
import releaseImg from "@/assets/images/new_release.png";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NewReleaseItem from "../../New Release/NewReleaseItem";
import { Box } from "@mui/material";

export const DUMMY_RELEASES = [
  {
    id: "R1",
    image: releaseImg,
    source: "Origin",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
    links: { instagram: "/", twitter: "/", discord: "/" },
  },
  {
    id: "R2",
    image: releaseImg,
    source: "Origin",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
    links: { instagram: "/", twitter: "/", discord: "/" },
  },
  {
    id: "R3",
    image: releaseImg,
    source: "Origin",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
    links: { instagram: "/", twitter: "/", discord: "/" },
  },
  {
    id: "R4",
    image: releaseImg,
    source: "Origin",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
    links: { instagram: "/", twitter: "/", discord: "/" },
  },
];

const NewReleaseSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    lazyLoad: 'ondemand',

  };
  const displayCarrousel = DUMMY_RELEASES.map((release) => {
    return (
      <Box key={release.id}>
      <NewReleaseItem
        id={release.id}
        image={release.image}
        art={release.source}
        location={release.location}
        artist={release.author}
        links={release.links}
      />
      </Box>
    );
  })
  return (
    <section className="text-white font-Montserrat mr-[16px] ml-[8px] mt-[8px]">
      <Slider {...settings} className="w-full mr-[20px] ">
      {displayCarrousel} 
      </Slider>
    </section>
  );
};

export default NewReleaseSection;
