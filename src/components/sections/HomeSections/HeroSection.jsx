
import hero0Image from "@/assets/images/hero0.png";
import hero1Image from "@/assets/images/hero1.png";
import hero2Image from "@/assets/images/hero2.png";
import hero3Image from "@/assets/images/hero3.png";
import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from 'next/router';
import { NodeNextRequest } from "next/dist/server/base-http/node";

export const HERO_DATA = [
  {
    id: "H0",
    image: hero0Image,
    title: "Replacing Billboards With Art",
    button: "Explore",
    ref: "artboardz"
  },
  {
    id: "H1",
    image: hero1Image,
    title: "Support Our New Collections",
    button: "Support",
    ref: "new-releases"
  },
  {
    id: "H2",
    image: hero2Image,
    title: "Our Top Artboardz Collectors",
    button: "View",
    ref: "leaderboardz"
  },
  {
    id: "H3",
    image: hero3Image,
    title: "How Artboardz Works",
    button: "Learn",
    ref: "about"
 },
];

const HeroSection = () => {
  const router = useRouter();
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
  const displayHero = HERO_DATA.map((hero) => {
    return (
      <Box sx={{justifyContent: 'center', w:'100vw', border: 1, borderColor: 'transparent', borderRadius:'12px'}}>
      <Image
        src={hero.image}
        alt=""
        className="w-full h-[82vh] rounded-[12px] overflow-hidden"
      />
      <div className="sm:absolute sm:bottom-[5%] sm: ml-12">
        <h1 className="  text-[40px] text-center tracking-wide text-white ">{hero.title}</h1>
        <button className="bg-[#6E028F] text-white py-2 px-4 rounded-md text-base tracking-wide font-Montserrat font-medium mx-auto block my-6 sm:mx-0">
        <Link href={'/'+hero.ref} className={router.pathname.split('/')[1] == hero.ref }>{hero.button}</Link>          </button>
      </div>
      </Box>
    );
  })
  return (
    <section className=" mr-[16px] ml-[8px] mt-[8px] rounded-[12px]">
      <div className="w-full rounded-[12px]">
        <Slider {...settings} className="w-full mr-[20px] rounded-[12px] overflow-hidden">
          {displayHero}
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
