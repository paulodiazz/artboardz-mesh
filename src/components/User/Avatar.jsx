import Image from 'next/image'

const Avatar = ({ image, username, borderColor }) => {
  const AvatarClass = `h-full w-full rounded-full object-cover`;
  return (
    <Image src={image} alt={username} className={AvatarClass} width={100} height={100} />
  );
}

export default Avatar;
