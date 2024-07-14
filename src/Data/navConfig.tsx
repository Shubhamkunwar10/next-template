import {
  HomeOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

export const navConfig = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
    to: "/",
  },
  {
    text: "More",
    icon: null,
    to: "",

  },
  {
    text: "Sei Naming service",
    icon: <ShoppingCartOutlined />,
    to: "/seiname",
  },

];

export default navConfig;