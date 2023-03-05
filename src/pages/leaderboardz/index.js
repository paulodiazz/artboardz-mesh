import { useEffect } from "react";
import LeaderBoardSection from "@/components/sections/LeaderBoardSections/LeaderBoardSection";

const LeaderBoardPage = () => {
  useEffect(() => {
    document.querySelector("#main-layout").scrollTop = 0;
  }, []);
  return (
    <div className="min-h-screen">
      <h1 className="xl:hidden block  text-[22px] md:text-[32px] font-semibold text-center tracking-wide text-white mb-[8px] font-Montserrat">
        Leaderboardz
      </h1>
      <LeaderBoardSection />
    </div>
  );
};

export default LeaderBoardPage;
