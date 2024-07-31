
import HouseIcon from '@mui/icons-material/House';
import BookIcon from '@mui/icons-material/Book';
import FeedIcon from '@mui/icons-material/Feed';
import GroupsIcon from '@mui/icons-material/Groups';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import SickIcon from '@mui/icons-material/Sick';

export const footer = {
  columns: [
    {
      title: "Pages",
      links: [
        {
          name: "Home",
          link: "/",
          leavesWebsite: false,
          icon:<HouseIcon/>
        },
        {
          name: "Blog",
          link: "/blogs",
          leavesWebsite: false,
          icon:<FeedIcon/>

        },
        {
          name: "About",
          link: "/about",
          leavesWebsite: false,
          icon:<GroupsIcon/>

        },
        {
          name: "Contact",
          link: "/contact",
          leavesWebsite: false,
          icon:<ConnectWithoutContactIcon/>

        },
      ],
    },
    {
      title: "Social",
      links: [
        {
          name: "Twittter",
          link: "https://twitter.com/duke_eth",
          icon: <XIcon/>,
          leavesWebsite: true,
        },
        {
          name: "Instagram",
          link: "https://instagram.com/rabbitar.sol?igshid=YmMyMTA2M2Y=",
          icon: <InstagramIcon/>,
          leavesWebsite: true,
        },

        {
          name: "Discord",
          link: "https://discord.com/invite/JhPbme5A5h",
          icon: <SickIcon/>,
          leavesWebsite: true,
        },
      ],
    },
  ],
  support: {
    buymeacoffee: "kunwar",
    paypal: "kunwar",
    message: "I appreciate your support very much! 💙",
  },
};
