import Image from 'next/image'

const NewReleaseImage = (props) => {
  return (
    
      <Image src={props.image} alt="/" className="w-full lg:h-[68vh]  object-center" />
    
  );
};

export default NewReleaseImage;
