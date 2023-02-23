import Image from 'next/image'

const NewReleaseImage = (props) => {
  return (
    
      <Image src={props.image} alt="/" className="w-full max-h-[72vh]  object-cover object-topz-0" />
    
  );
};

export default NewReleaseImage;
