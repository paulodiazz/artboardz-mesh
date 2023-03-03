import CBImg1 from "@/assets/images/CB1.png";
import CBImg2 from "@/assets/images/CB2.png";
import CBImg3 from "@/assets/images/CB3.png";
import CBImg4 from "@/assets/images/CB4.png";
import Image from 'next/image'

const DUMMY_INFO = [
  {
    image: CBImg1,
    description: "Adorning cities with art not advertising",
  },
  {
    image: CBImg2,
    description: "Name engraved on physical plaque",
  },
  {
    image: CBImg3,
    description: "Personalized digital tag on collection page",
  },
  {
    image: CBImg4,
    description: "Tactfully promoting Cardano",
  },
];

const BenefitsSections = () => {
  return (
    <section className="tracking-wide mb-8 text-white  mx-auto w-[95%] lg:w-full  font-Montserrat font-medium space-y-6  sm:p-4">
      <h1 className="text-[20px] sm:text-[40px] text-center ">Collectors Benefits</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-14  justify-items-center">
        {DUMMY_INFO.map((info, index) => {
          return (
            <div
              key={index}
              className="w-full h-full flex flex-col align-top ml-4 " 
            >
              {/* <div className="m-auto h-[15rem] mt-6">
              <div className="flex justify-center"> */}
              <Image
                src={info.image}
                alt="/"
                className= 'object-contain h-[12rem]'
              />
              {/* </div>
              <p className=" text-base text-[20px] text-center mt-6">
                {info.description}
              </p> 
              </div> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BenefitsSections;
