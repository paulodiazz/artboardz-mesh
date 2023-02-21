import NewReleaseImage from "./NewReleaseImage";

export const DetailsCard = ({ image, title, desc }) => {
  return (
    <div>
      {title && (
        <h2 className="text-2xl md:text-3xl font-medium pb-3">{title}</h2>
      )}
      <div className="flex flex-row">
      {desc && <p className="text-base md:text-xl text-justify">{desc}</p>}
      {image && (
        <div className="mt-6 w-[350rem]">
          <NewReleaseImage image={image} />
        </div>
      )}
      </div>
    </div>
  );
};
