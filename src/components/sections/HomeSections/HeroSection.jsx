import heroImage from "@/assets/images/heroImage.png";
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="md:mb-8 mr-8">
      <div className="w-full relative">
        <Image
          src={heroImage}
          alt=""
          className="w-full lg:h-[500px] object-cover object-center rounded-[12px] mr-[8px] ml-[16px] border-[4px]"
        />
        {/* <div className="sm:absolute sm:bottom-[10%] sm: ml-6">
          <button className="bg-[#212634] text-white py-2 px-4 rounded-md text-base tracking-wide font-Montserrat font-medium mx-auto block my-6 sm:mx-0">
            Upcoming Mints
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
