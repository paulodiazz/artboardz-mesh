import UserArtBoardItem from "./UserArtBoardItem";

const UserArtboardzList = ({ artBoardz }) => {
  return (
    <div className="w-[302px] sm:w-[612px] md:w-[630px] lg:w-[1000px] xl:w-[1290px] m-auto">
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-6 gap-x-1 ">
      {artBoardz.map((artBorder) => {
        return (
          <UserArtBoardItem
            key={artBorder.id}
            id={artBorder.id}
            image={artBorder.image}
            art={artBorder.source}
            location={artBorder.location}
            artist={artBorder.author}
            links={artBorder.links}
            price={artBorder.price}
          />
        );
      })}
    </ul>
    </div>
  );
};

export default UserArtboardzList;
