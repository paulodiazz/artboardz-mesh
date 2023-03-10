import { Box } from "@mui/material";
import Image from "next/image";
import { SocialIcons } from "../Layouts/SocialIcons";
import MinusIcon from "@/assets/icons/MinusIcon";
import PlusIcon from "@/assets/icons/PlusIcon";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";
import { useRouter } from 'next/router';



function ItemPurchaseActions(props) {
  const router = useRouter();
  return (
    <div className={router.pathname.split('/')[1] == "artboardz" ? "hidden" :"grid grid-cols-2 gap-2 xl:w-[30vw] xl:mx-auto"}>
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

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const DetailsCard = ({ image, title, desc, art, artist, desc2, desc3, mintDate, price, items, royalty, location }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantityHandler = () => {
    setQuantity((oldState) => oldState + 1);
  };
  const decrementQuantityHandler = () => {
    setQuantity((oldState) => (oldState > 1 ? oldState - 1 : 1));
  };
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const router = useRouter();
  return (
    <div>
      <div className="hidden xl:block xl:max-w-[70vw] mx-auto">
          <div className="grid grid-cols-5 gap-2 my-4 items-center justify-center text-base xl:text-xl tracking-wide">
          <div className=" p-2 border rounded-lg border-light-purple text-center h-[65px]">
              <p>Mint Date</p>
              <p className="font-semibold ">{mintDate}</p>
            </div>
            <div className=" p-2 border rounded-lg border-light-purple text-center h-[65px]">
              <p>Price</p>
              <p className="font-semibold">{price}</p>
            </div>
            <div className="p-2 border rounded-lg border-light-purple text-center h-[65px]">
              <p>Items</p>
              <p className="font-semibold">{items}</p>
            </div>
            <div className="p-2  border rounded-lg border-light-purple text-center h-[65px]">
              <p>Royalty</p>
              <p className="font-semibold">{royalty}</p>
            </div>
            <div className="p-2  border rounded-lg border-light-purple text-center h-[65px]">
              <p>Location</p>
              <p className="font-semibold">{location.country}</p>
            </div>
          </div>
          <button className={router.pathname.split('/')[1] == "artboardz" ? "bg-active-link rounded-xl p-2 font-semibold w-full xl:w-1/6  mx-auto block tracking-wide text-base my-4": "hidden"}>
            Jpgstore
          </button>
          <ItemPurchaseActions
            quantity={quantity}
            incrementQuantityHandler={incrementQuantityHandler}
            decrementQuantityHandler={decrementQuantityHandler}
          />
        </div>

        <div className="hidden xl:grid grid-cols-2 grid-rows-1 mt-[36px] py-4">
          <div>
          {image && (
              <Image src={image} alt=""  className="w-full ml-[8px]" />
          )}
          </div>
        <div className="justify-center">
          <div className="flex flex-row content-center">
            <p className="text-2xl xl:text-[36px] font-medium ml-6 mb-6">{`${art} by ${artist}`}</p>
            <div className="mt-2 ml-4">
            <SocialIcons />
            </div> 
          </div>
          
          {desc && <p className="text-base xl:text-xl  m-6">{desc}</p>}
          {desc2 && <p className="text-base xl:text-xl  m-6">{desc2}</p>}
          {desc3 && <p className="text-base xl:text-xl  m-6">{desc3}</p>}
        </div>
        
      </div>
      {/* Responsive Details and quantity section */}
      <div className="px-[8px] xl:hidden">
      <div className="flex flex-row content-center mt-[16px] justify-between md:justify-center">
          <p className="text-2xl xl:text-[36px] font-medium ">{`${art} by ${artist}`}</p>
          <div className="mt-2 ml-4 ">
          <SocialIcons />
        </div> 
      </div>
      <div className="] mx-auto">
          <div className="grid grid-cols-3 gap-2 my-4 items-center justify-center text-base xl:text-xl tracking-wide">
          <div className=" p-2 border rounded-lg border-light-purple text-center h-[65px]">
              <p>Mint Date</p>
              <p className="font-semibold text-sm sm:text-md  ">{mintDate}</p>
            </div>
            <div className=" p-2 border rounded-lg border-light-purple text-center h-[65px]">
              <p>Price</p>
              <p className="font-semibold">{price}</p>
            </div>
            <div className="p-2 border rounded-lg border-light-purple text-center h-[65px]">
              <p>Items</p>
              <p className="font-semibold">{items}</p>
            </div>
            </div>
            <div className="grid grid-cols-2 gap-2 my-4 items-center justify-center text-base xl:text-xl tracking-wide">  
            <div className="p-2  border rounded-lg border-light-purple text-center h-[65px]">
              <p>Royalty</p>
              <p className="font-semibold">{royalty}</p>
            </div>
            <div className="p-2  border rounded-lg border-light-purple text-center h-[65px]">
              <p>Location</p>
              <p className="font-semibold">{location.country}</p>
            </div>
            </div>
            <button className={router.pathname.split('/')[1] == "artboardz" ? "bg-active-link rounded-xl p-2 font-semibold w-full xl:w-1/6  mx-auto block tracking-wide text-base my-4": "hidden"}>
            Jpgstore
          </button>
          <ItemPurchaseActions
            quantity={quantity}
            incrementQuantityHandler={incrementQuantityHandler}
            decrementQuantityHandler={decrementQuantityHandler}
          />
        </div>
        <div>
          {image && (
              <Image src={image} alt=""  className="w-full py-4" />
          )}
          </div>
          <Card sx={{ background:'transparent', boxShadow: 0}}>
      <CardContent>
    
        {desc && <p className="text-base text-white ">{desc}</p>}
      </CardContent>
      <CardActions disableSpacing  sx={{m:'auto', width:'135px'}}>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon sx={{ color: 'white', m:'auto'  }}/>
        </ExpandMore>
        <p className="text-base text-white font-semibold">
          See More
        </p>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        {desc2 && <p className="text-base text-white ">{desc2}</p>}
        <div></div>
          {desc3 && <p className="text-base text-white ">{desc3}</p>}
        </CardContent>
      </Collapse>
    </Card>
        </div>
       
    </div>
  );
};
