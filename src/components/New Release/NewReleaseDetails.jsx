import { useState } from "react";
import MinusIcon from "@/assets/icons/MinusIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
import { DetailsCard } from "./DetailsCard";
import NewReleaseImage from "./NewReleaseImage";
import NewReleaseInfo from "./NewReleaseInfo";

function ItemPurchaseActions(props) {
  return (
    <div className="grid grid-cols-2 gap-2 md:w-[30vw] md:mx-auto">
      <div className="border rounded-[5px] border-light-purple flex justify-between p-2">
        <p>Quantity:</p>
        <button onClick={props.decrementQuantityHandler}>
          <MinusIcon />
        </button>
        <p>{props.quantity}</p>
        <button onClick={props.incrementQuantityHandler}>
          <PlusIcon />
        </button>
      </div>
      <button className="bg-active-link rounded-[5px] font-semibold">Buy</button>
    </div>
  );
}

const NewReleaseDetails = ({
  image,
  art,
  location,
  artist,
  links,
  artDesc,
  moreInfo,
}) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantityHandler = () => {
    setQuantity((oldState) => oldState + 1);
  };
  const decrementQuantityHandler = () => {
    setQuantity((oldState) => (oldState > 1 ? oldState - 1 : 1));
  };
  return (
    <section className="p-4 text-white font-Montserrat">
      <div className=" pb-6"> 
      <div className="overflow-hidden rounded-[20px]">
        <NewReleaseImage image={image} />
        </div>
        <div className="max-w-[70vw] mx-auto">
          <div className="grid grid-cols-5 gap-2 my-4 items-center justify-center text-base sm:text-xl tracking-wide">
          <div className=" p-2 border rounded-lg border-light-purple text-center">
              <p>Mint Date</p>
              <p className="font-semibold">Feb 22, 2023</p>
            </div>
            <div className=" p-2 border rounded-lg border-light-purple text-center">
              <p>Price</p>
              <p className="font-semibold">100</p>
            </div>
            <div className="p-2 border rounded-lg border-light-purple text-center">
              <p>Items</p>
              <p className="font-semibold">40</p>
            </div>
            <div className="p-2  border rounded-lg border-light-purple text-center">
              <p>Royalty</p>
              <p className="font-semibold">5%</p>
            </div>
            <div className="p-2  border rounded-lg border-light-purple text-center">
              <p>Location</p>
              <p className="font-semibold">South Africa</p>
            </div>
          </div>
          <ItemPurchaseActions
            quantity={quantity}
            incrementQuantityHandler={incrementQuantityHandler}
            decrementQuantityHandler={decrementQuantityHandler}
          />
        </div>
      </div>
     
      {moreInfo.map((info, index) => {
        return (
          <div key={index} className="py-6 ">
             <div className="py-6">
      </div>
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
              
            />
          </div>
        );
      })}
    </section>
  );
};

export default NewReleaseDetails;
