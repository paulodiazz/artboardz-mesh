import { useEffect } from "react";
import SearchBar from "@/components/Navigation/SearchBar";
import ArtBoardzSection from "@/components/sections/ArtBoardzSection/ArtBoardzSection";

const ArtBoardzPage = () => {
  useEffect(() => {
    document.querySelector("#main-layout").scrollTop = 0;
  }, []);
  return (
    <>
      <h1 className="text-2xl md:text-4xl font-medium tracking-wide text-center my-4 text-white font-Montserrat">
        Artboardz
      </h1>
      <div className="ml-4 mr-8">
      <SearchBar />
      <ArtBoardzSection />
      </div>
    </>
  );
};

export default ArtBoardzPage;
