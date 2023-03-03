import Link from "next/link";
import { Logo } from "../Layouts/Logo";
import { useDispatch } from "react-redux";
import { UIAction } from "../../store/redux-slices/UI-slice";
import { useRouter } from 'next/router';
import partner1 from '@/assets/images/partner1.png'
import partner2 from '@/assets/images/partner2.png'
import partner3 from '@/assets/images/partner3.png'
import Image from "next/image";


const Navbar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  // const activeNavLinkHandler = ({ isActive }) => {
  //   return isActive
  //     ? "bg-active-link px-2 w-full inline-block"
  //     : "px-2 inline-block";
  // };
  const toggleNavbarHandler = () => {
    dispatch(UIAction.toggleNavbar());
  };

  return (
    <nav
      className={`bg-primary-color text-white text-xl  font-Montserrat h-fit w-[96%] sm:w-full mx-2 sm:mx-0  border border-[#FFFFFF] navbar z-50 absolute top-[75px] sm:relative sm:flex sm:left-0 sm:top-0 sm:flex-col sm:px-6 sm:py-4  sm:h-screen sm:gap-y-4 sm:border-none`}
    >
      <div className="hidden sm:flex justify-center relative bottom-2">
        <Logo/>
      </div>

      <ul className="text-center space-y-8 my-8 sm:text-left sm:space-y-4 sm:pt-2">
        <li onClick={toggleNavbarHandler} className="">
          <Link href="/" className={router.pathname == "/" ?  "w-[95%] m-auto h-[46px] pt-2 bg-active-link sm:px-2  sm:h-fit sm:pt-0   inline-block" : "px-2 inline-block"}>
            Home
          </Link>
        </li>
        <li onClick={toggleNavbarHandler}>
          <Link href="/new-releases" className={router.pathname.split('/')[1] == "new-releases" ? "w-[95%] m-auto h-[46px] pt-2 bg-active-link sm:px-2  sm:h-fit sm:pt-0   inline-block sm:w-full" : "px-2 inline-block"}>
            New Releases
          </Link>
        </li>
        <li onClick={toggleNavbarHandler}>
          <Link href="/artboardz" className={router.pathname.split('/')[1] == "artboardz" ? "w-[95%] m-auto h-[46px] pt-2 bg-active-link sm:px-2  sm:h-fit sm:pt-0   inline-block" : "px-2 inline-block"}>
            Artboardz
          </Link>
        </li>
        <li onClick={toggleNavbarHandler}>
          <Link href="/leaderboardz" className={router.pathname.split('/')[1] == "leaderboardz" ? "w-[95%] m-auto h-[46px] pt-2 bg-active-link sm:px-2  sm:h-fit sm:pt-0   inline-block" : "px-2 inline-block"}>
            Leaderboardz
          </Link>
        </li>
        <li onClick={toggleNavbarHandler}>
          <Link href="/about" className={router.pathname.split('/')[1] == "about" ? "w-[95%] m-auto h-[46px] pt-2 bg-active-link sm:px-2  sm:h-fit sm:pt-0   inline-block" : "px-2 inline-block"}>
            About
          </Link>
        </li>
        {/* <li className="sm:hidden">
          <CardanoWallet/>
        </li> */}
      </ul>
      <div className="hidden sm:block ml-2 mt-auto w-fit">
        <h1 className="p-2">Partners</h1>
        <div className="flex gap-2">
        <a to="/">
          <Image src={partner1} width={54} />
        </a>
        <a to="/">
        <Image src={partner2} width={54} />
        </a>
        <a to="/">
        <Image src={partner3} width={54} />
        </a>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
