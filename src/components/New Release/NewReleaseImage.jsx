import Image from 'next/image'

const NewReleaseImage = (props) => {
  return (
    <div>
      <Image src={props.image} alt="/" className="w-full lg:h-[500px] object-cover object-center " />
    </div>
  );
};

export default NewReleaseImage;
