import { useEffect } from "react";
import SearchBar from "@/components/Navigation/SearchBar";
import ArtBoardzSection from "@/components/sections/ArtBoardzSection/ArtBoardzSection";

const ArtBoardzPage = () => {
  useEffect(() => {
    document.querySelector("#main-layout").scrollTop = 0;
  }, []);
  return (
    <>
      <h1 className="sm:hidden block text-2xl md:text-4xl font-medium tracking-wide text-center my-4 text-white font-Montserrat">
        Artboardz
      </h1> 
      <div className="mx-[8px] sm:ml-4 sm:mr-8 sm:mt-8">
      <SearchBar />
      <ArtBoardzSection />
      </div>
    </>
  );
};

export default ArtBoardzPage;
