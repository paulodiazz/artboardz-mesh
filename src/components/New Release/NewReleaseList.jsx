import NewReleaseItem from "./NewReleaseItem";
import { Box } from "@mui/material";
const NewReleaseList = ({ releases }) => {
  return (
    <Box sx={{justifyContent: 'center', w:'100vw', }}>
      {releases.map((release) => {
        return (
          <Box>
          <NewReleaseItem
            key={release.id}
            id={release.id}
            image={release.image}
            art={release.source}
            location={release.location}
            artist={release.author}
            links={release.links}
          />
          </Box>
        );
      })}
    </Box>
  );
};

export default NewReleaseList;
