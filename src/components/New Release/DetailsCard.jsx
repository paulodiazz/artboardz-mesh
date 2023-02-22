import NewReleaseImage from "./NewReleaseImage";

export const DetailsCard = ({ image, title, desc }) => {
  return (
    <div>
      <div className="flex flex-row">
      {image && (
        <div className="mt-6 w-[400vw]">
          <NewReleaseImage image={image} />
        </div>
      )}
      {desc && <p className="text-base md:text-xl text-justify">{desc}</p>}
      
      </div>
    </div>
  );
};
