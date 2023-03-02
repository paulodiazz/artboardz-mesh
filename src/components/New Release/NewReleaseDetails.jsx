
import { DetailsCard } from "./DetailsCard";
import NewReleaseImage from "./NewReleaseImage";
import NewReleaseInfo from "./NewReleaseInfo";



const NewReleaseDetails = ({
  image,
  art,
  location,
  artist,
  links,
  artDesc,
  moreInfo,
  mintDate,
  price,
  items,
  royalty
}) => {
  
  return (
    <section className="text-white font-Montserrat">
      <div className=" mt-[8px] mr-[8px] sm:mr-[16px] ml-[8px]"> 
      <h1 className="sm:hidden block  text-[22px] font-semibold text-center tracking-wide text-white mb-[8px]">New Releases</h1>
      <div className="overflow-hidden rounded-[20px] border border-transparent">
        <NewReleaseImage image={image} />
        </div>
        
      </div>
     
      {moreInfo.map((info, index) => {
        return (
          <div key={index} className=" ">
            <DetailsCard
              image={info.image}
              title={info.title}
              desc={info.desc}
              desc2={info.desc2}
              desc3={info.desc3}
              art={art}
              location={location}
              artist={artist}
              links={links}
              artDesc={artDesc}
              mintDate={mintDate}
              price={price}
              items={items}
              royalty={royalty}
  
              
            />
          </div>
        );
      })}
    </section>
  );
};

export default NewReleaseDetails;
