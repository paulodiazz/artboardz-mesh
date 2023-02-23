import heroImage from "@/assets/images/heroImage.png";
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
  return (
    <section className=" mr-[16px] ml-[8px] mt-[8px]">
      <div className="w-full">
        <Slider {...settings} className="w-full mr-[20px]">
        <Box sx={{justifyContent: 'center', w:'100vw', border: 1, borderColor: 'transparent', }}>
        <Image
          src={hero0Image}
          alt=""
          className="w-full h-[82vh] rounded-[12px] "
        />
        <div className="sm:absolute sm:bottom-[5%] sm: ml-12">
          <h1 className="  text-[40px] text-center tracking-wide text-white ">Replacing Billboards With Art</h1>
          <button className="bg-[#6E028F] text-white py-2 px-4 rounded-md text-base tracking-wide font-Montserrat font-medium mx-auto block my-6 sm:mx-0">
          <Link href="/artboardz" className={router.pathname.split('/')[1] == "artboardz" }>Explore</Link>          </button>
        </div>
        </Box>
          <Box sx={{justifyContent: 'center', w:'100vw', }}>
        <Image
          src={hero1Image}
          alt=""
          className="w-full h-[82vh] rounded-[12px] "
        />
        <div className="sm:absolute sm:bottom-[5%] sm: ml-12">
          <h1 className="  text-[40px] text-center tracking-wide text-white ">Support Our New Collections</h1>
          <button className="bg-[#6E028F] text-white py-2 px-4 rounded-md text-base tracking-wide font-Montserrat font-medium mx-auto block my-6 sm:mx-0">
            <Link href="/new-releases" className={router.pathname.split('/')[1] == "new-releases" }>Support</Link>
          </button>
        </div>
        </Box>
        <Box sx={{justifyContent: 'center', w:'100vw', }}>
        <Image
          src={hero2Image}
          alt=""
          className="w-full h-[82vh] rounded-[12px] "
        />
        <div className="sm:absolute sm:bottom-[5%] sm: ml-12">
          <h1 className="  text-[40px] text-center tracking-wide text-white ">Our Top Artboardz Collectors</h1>
          <button className="bg-[#6E028F] text-white py-2 px-4 rounded-md text-base tracking-wide font-Montserrat font-medium mx-auto block my-6 sm:mx-0">
          <Link href="/leaderboardz" className={router.pathname.split('/')[1] == "leaderboardz" }>View</Link>
          </button>
        </div>
        </Box>
        <Box sx={{justifyContent: 'center', w:'100vw', }}>
        <Image
          src={hero3Image}
          alt=""
          className="w-full h-[82vh] rounded-[12px] "
        />
        <div className="sm:absolute sm:bottom-[5%] sm: ml-12">
          <h1 className="  text-[40px] text-center tracking-wide text-white ">How Artboardz Works</h1>
          <button className="bg-[#6E028F] text-white py-2 px-4 rounded-md text-base tracking-wide font-Montserrat font-medium mx-auto block my-6 sm:mx-0">
          <Link href="/about" className={router.pathname.split('/')[1] == "about" }>Learn</Link>
          </button>
        </div>
        </Box>
        </Slider>
      </div>
    </section>
  );
};

export default HeroSection;
