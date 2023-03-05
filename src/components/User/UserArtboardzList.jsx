import UserArtBoardItem from "./UserArtBoardItem";

const UserArtboardzList = ({ artBoardz }) => {
  return (
    <ul className="grid sm:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-1 ">
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
  );
};

export default UserArtboardzList;
