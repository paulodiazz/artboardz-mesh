import LeaderBoardList from "../../Leaderboardz/LeaderBoardList";
import LeaderBoardStats from "../../Leaderboardz/LeaderBoardStats";

const LeaderBoardSection = () => {
  return (
    <section className="p-2">
      <LeaderBoardStats />
      <LeaderBoardList />
    </section>
  );
};

export default LeaderBoardSection;
