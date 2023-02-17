import Image from 'next/image'

const NewReleaseImage = (props) => {
  return (
    <div>
      <Image src={props.image} alt="/" className="w-full object-cover " />
    </div>
  );
};

export default NewReleaseImage;
