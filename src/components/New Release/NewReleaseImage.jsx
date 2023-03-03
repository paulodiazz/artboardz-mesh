import Image from 'next/image'

const NewReleaseImage = (props) => {
  return (
    
      <Image src={props.image} alt="/" className="w-full  h-[236px] md:h-[536px] xl:h-[70vh]  object-cover object-top" />
    
  );
};

export default NewReleaseImage;
