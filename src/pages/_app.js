import "../styles/globals.css";
import LoadingScreen from "@/components/LoadingScreen/LoadingScreen";
import { MeshProvider } from "@meshsdk/react";
import { store } from "../store/redux-store";
import Header from "@/components/Layouts//Header";
import { useSelector } from "react-redux";
import { navbarState } from "../store/redux-slices/UI-slice";
import Navbar from "@/components/Navigation/Navbar";
import { SocialIcons } from "@/components/Layouts/SocialIcons";
import useWindowSize from "@/hook/window-size";

import React from "react";

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

  return (
    
    <MeshProvider>
    {loading ? 
    <LoadingScreen />
    :
    <div>
      <div
        className={`h-screen layout max-w-8xl mx-auto relative`}
      >
        <Header />
        {isNavShown && <Navbar />}
        <main
          id="main-layout"
          className={`bg-primary-purple  min-h-full main overflow-y-auto sm:bg-transparent flex flex-col scroll-smooth`}
        >
          <div
            className={`backdrop w-1/3 h-full absolute top-0 left-1/2 -translate-x-1/2`}
          ></div>
    
      <Component {...pageProps} />
  
    <div className="w-fit mx-auto mt-auto flex items-center flex-col sm:hidden ">
            <SocialIcons />
            <div>
              <p className="text-white font-Montserrat">Pool ID: d19db...44</p>
            </div>
          </div>
        </main>
      </div>
    </div>
}
    </MeshProvider>
    
     
  );
}

export default store.withRedux(MyApp);
