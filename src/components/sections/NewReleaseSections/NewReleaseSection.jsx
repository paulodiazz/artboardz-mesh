import NewReleaseList from "../../New Release/NewReleaseList";
import releaseImg from "@/assets/images/new_release.png";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import NewReleaseItem from "../../New Release/NewReleaseItem";
import { Box } from "@mui/material";
import SergeImage from "@/assets/images/SergeImage.png"

export const DUMMY_RELEASES = [
  {
    id: "R1",
    image: releaseImg,
    image2: SergeImage,
    source: "Origins #642",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
    links: { instagram: "/", twitter: "/", discord: "/" },
    price:"100"
    
  },
  {
    id: "R2",
    image: releaseImg,
    image2: SergeImage,
    source: "Origins #642",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
    links: { instagram: "/", twitter: "/", discord: "/" },
    price:"100"
  },
  {
    id: "R3",
    image: releaseImg,
    image2: SergeImage,
    source: "Origins #642",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
    links: { instagram: "/", twitter: "/", discord: "/" },
    price:"100"
  },
  {
    id: "R4",
    image: releaseImg,
    image2: SergeImage,
    source: "Origins #642",
    location: { city: "Cape Town", country: "South Africa" },
    author: "SergeOne",
    links: { instagram: "/", twitter: "/", discord: "/" },
    price:"100"
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
    <section className="text-white font-Montserrat mr-[8px] xl:mr-[16px] ml-[8px] xl:mt-[8px]">
              <h1 className="xl:hidden block  text-[22px] md:text-[32px] font-semibold text-center tracking-wide text-white mb-[8px]">New Releases</h1>
      <div className="hidden sm:w-full sm:rounded-[12px] xl:block">
      <Slider {...settings} className="w-full ">
      {displayCarrousel} 
      </Slider>
      </div>
      <div className="xl:hidden w-full rounded-[12px] block">
      {displayCarrousel} 
      </div>
    </section>
  );
};

export default NewReleaseSection;
