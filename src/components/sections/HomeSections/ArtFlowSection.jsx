import artflowImg1 from "@/assets/images/Artflow1.png";
import artflowImg2 from "@/assets/images/Artflow2.png";
import artflowImg3 from "@/assets/images/Artflow3.png";
import artflowImg4 from "@/assets/images/Artflow4.png";
import artflowImg5 from "@/assets/images/Artflow5.png";
import artflowImg6 from "@/assets/images/Artflow6.png";
import Image from 'next/image'

const DUMMY_INFO = [
  {
    image: artflowImg1,
    description: "Artist creates a mural on a positive narrative",
  },
  {
    image: artflowImg3,
    description: "Artboardz Promotes and Sells Digital Art",
  },
  {
    image: artflowImg5,
    description: "Artist Creates Physical Version of the Art",
  },
];

const ArtFlowSection = () => {
  return (
    <section className="text-white font-Montserrat font-medium tracking-wide p-4 text-center space-y-5 mb-28">
      <article>
        <h1 className="text-[40px] mt-12">The Artboardz Flow</h1>
        <p className="text-[18px] mt-10">
          The artist first creates the digital Artboardz version. Artists have
          complete creative freedom as long as the work is imbued with a
          positive, inspiring message. Once between 30 to 50 NFTs have sold, the
          artist creates the equivalent physical version at a predetermined
          public location.
        </p>
      </article>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-28 gap-y-20 lg:gap-x-10 lg:gap-14">
        {DUMMY_INFO.map((info, index) => {
          return (
            <div
              key={index}
              className="w-full h-full flex flex-col align-top mt-4  ml-4"
            >
              <div className="m-auto h-[15rem]">
              <div className="flex justify-center">
              <Image
                src={info.image}
                alt="/"
                className= 'object-contain h-[15rem]'
              />
              </div>
              <p className=" text-base text-[20px] text-center mt-6 ">
                {info.description}
              </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ArtFlowSection;
