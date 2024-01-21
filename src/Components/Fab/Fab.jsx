import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import { BUTTON } from "../../assets/Constants";

// eslint-disable-next-line react/prop-types
const FabComponent = ({ onClick }) => {
  const style = {
    margin: 0,
    top: "auto",
    right: 30,
    bottom: 40,
    left: "auto",
    position: "fixed",
  };
  return (
    <Fab
      variant="extended"
      className="floatingActionButton"
      onClick={onClick}
      style={style}
    >
      <AddIcon sx={{ mr: 1, color: "black" }} />
      {BUTTON.NEW}
    </Fab>
  );
};

export default FabComponent;
