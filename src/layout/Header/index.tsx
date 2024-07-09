
import {
  AppBar,
} from "@mui/material";

const Header= ({APP_BAR,isNonMobile}:any) => {


  return (
    <AppBar sx={{
      height:APP_BAR,
      marginBottom:APP_BAR
    }}>
        NAMING SERVICE
    </AppBar>
  );
}


export default Header;