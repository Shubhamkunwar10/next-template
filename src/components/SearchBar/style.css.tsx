import { getColors } from "@/layout/Theme/themes";
import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled Input
export const StyledSearchBar = styled(TextField)(({ theme }) => ({
  fontFamily: "Inconsolata, monospace",
  margin: "0",
  width: "70vw",
  height: "50px",
  outline: "none",
  border: `1px solid ${getColors().grey[100]}`,
  background: getColors().grey[900],
  color: getColors().grey[100],
  textShadow: `0 0 10px ${getColors().grey[100]}`,
  padding: "0 0",
  borderRadius: "30px",
  boxShadow: `${getColors().purpleAccent[300]} 5px 5px, ${getColors().purpleAccent[500]} 10px 10px, ${getColors().purpleAccent[700]} 15px 15px, ${getColors().purpleAccent[900]} 20px 20px`,

  // boxShadow:"rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px",
  transition: "width 0.5s, opacity 0.5s",
  opacity: 1,
  zIndex: 5,
  fontWeight: "bolder",
  letterSpacing: "0.1em",

  "&:hover": {
    cursor: "pointer",
  },

  "& .MuiInputBase-input": {
    color: getColors().grey[100],
    marginTop: "10px",
  },

  "& .MuiInputBase-input::placeholder": {
    color: getColors().grey[100],
    opacity: 0.5,
    fontWeight: "bolder",
  },
}));
