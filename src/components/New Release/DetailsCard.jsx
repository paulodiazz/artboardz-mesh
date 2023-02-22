import Image from "next/image";


export const DetailsCard = ({ image, title, desc, art, artist }) => {
  return (
    <div>
      <div className="flex flex-row ">
      {image && (
          <Image src={image} width={"100px"} height={"100px"}/>
      )}
      <div>
      <p className="text-2xl md:text-[36px] font-medium ml-6 mb-6">{`${art} by ${artist}`}</p>
      {desc && <p className="text-base md:text-xl text-justify m-6">{desc}</p>}
      </div>
      </div>
    </div>
  );
};
