import Image from 'next/image'

const NewReleaseImage = (props) => {
  return (
    <div className=" h-[488px] lg:h-[742px] ">
      <Image src={props.image} alt="/" className="w-full h-full object-cover " />
    </div>
  );
};

export default NewReleaseImage;
