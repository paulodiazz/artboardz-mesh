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
    <section className="text-white font-Montserrat font-medium tracking-wide p-4 text-center space-y-5 mb-8">
      <article>
        <h1 className="text-2xl mb-3 mt-6 md:text-4xl">The Artboardz Flow</h1>
        <p className="text-base md:text-xl">
          The artist first creates the digital Artboardz version. Artists have
          complete creative freedom as long as the work is imbued with a
          positive, inspiring message. Once between 30 to 50 NFTs have sold, the
          artist creates the equivalent physical version at a predetermined
          public location.
        </p>
      </article>
      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-x-10 lg:gap-14">
        {DUMMY_INFO.map((info, index) => {
          return (
            <div key={index}>
              <Image
                src={info.image}
                alt=""
                className="w-8/12 mx-auto aspect-square object-cover rounded-full"
              />
              <p className="text-xl my-3">{info.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ArtFlowSection;
