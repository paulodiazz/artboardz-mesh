import "../styles/globals.css";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import { MeshProvider } from "@meshsdk/react";
import { store } from "../store/redux-store";
import Header from "@/components/Layouts//Header";
import { useSelector } from "react-redux";
import { navbarState } from "../store/redux-slices/UI-slice";
import Navbar from "@/components/Navigation/Navbar";
import useWindowSize from "@/hook/window-size";
import partner1 from '@/assets/images/partner1.png'
import partner2 from '@/assets/images/partner2.png'
import partner3 from '@/assets/images/partner3.png'
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);
  const navBarState = useSelector(navbarState);
  const size = useWindowSize();
  const isNavShown = size.width > 640 ? true : navBarState;
  const router = useRouter();

  const paths = ["/","/new-releases"];
  return (
     
    <MeshProvider>
    {loading ? 
    <LoadingScreen />
    :
    <div>
      <div className={`h-screen layout scrollbar-hide max-w-8xl mx-auto relative`}>
        <Header />
        {isNavShown && <Navbar />}
        <main
          id="main-layout"
          className={` bg-primary-purple main overflow-y-auto bg-transparent flex flex-col scroll-smooth`}
        >
          {!paths.includes(router.pathname) ? <div className={`backdrop w-full h-full absolute top-0 left-1/2 -translate-x-1/2`}  /> :<div></div>
            }
          <Component {...pageProps} />
  
          <div className="h-screen w-fit mx-auto mt-auto mb-10 flex items-center flex-col sm:hidden ">
          <h1 className="p-2 text-white text-md font-semibold">Partners</h1>
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
            {/* <div>
              <p className="text-white font-Montserrat">Pool ID: d19db...44</p>
            </div> */}
          </div>
        </main>
      </div>
    </div>
}
    </MeshProvider>
    
     
  );
}

export default store.withRedux(MyApp);
