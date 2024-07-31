import { styled } from "@mui/material/styles";
import { getColors } from "@/layout/Theme/themes";
import { Box, Typography } from "@mui/material";

export const StyledBgcardHome = styled(Box)(({ theme }) => ({
  position: "relative",
}));

export const StyledBox1 = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: { xs: "15%", md: "80px", lg: "auto" },
  bottom: { xs: "auto", md: "auto", lg: "80%" },
  left: { xs: "10%", md: "auto", lg: "80%" },
  right: { xs: "auto", md: "20px", lg: "auto" },
  background: getColors().greenAccent[800],
  px: 2,
  py: 1,
  fontWeight: "bold",
  zIndex: 1,
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
}));

export const StyledBox2 = styled(Box)(({ theme }) => ({
  position: "absolute",
  display: "block",
  top: { xs: "80px", md: "32%", lg: "20%" },
  right: { xs: "15%", md: "20%", lg: "80%" },
  transform: { md: "translate(-50%, -50%)" },
  background: getColors().blueAccent[800],
  px: 2,
  py: 1,
  fontWeight: "bold",
  zIndex: 1,
}));

export const StyledBox3 = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: { xs: "30%", md: "110px", lg: "32%" },
  bottom: { xs: "auto", md: "auto", lg: "auto" },
  left: { xs: "70%", md: "140px", lg: "50%" },
  transform: { lg: "translate(50%, -50%)" },
  background: getColors().purpleAccent[800],
  px: 2,
  py: 1,
  fontWeight: "bold",
  zIndex: 1,
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  color: getColors().grey[100],
}));

export const StyledMain = styled('main')({
  display: 'flex',
  flex: '1',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '0 4px',
  marginTop: '6px',
  '@media (min-width: 786)': {
    marginTop: '10px',
  },
});

export const StyledLink = styled('a')(({ theme }) => ({
  border: '1px solid transparent',
  borderRadius: '2xl',
  padding: 'py-1 px-4',
  fontSize: 'text-sm',
  color: getColors().grey[100],
  fontWeight: 'bold',

  marginBottom: '5px',
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'all 300ms ease-in-out',
  },
}));

export const StyledH1 = styled('h1')(({ theme }) => ({
  margin: 'auto',
  maxWidth: '400px',
  fontFamily: 'display',
marginBottom:"20px",
  letterSpacing: 'normal',
  color: getColors().grey[300],
  '@media (min-width: 640px)': {
    fontSize: '7xl',
  },
}));

export const StyledSpan = styled('span')(({ theme }) => ({
  position: 'relative',
  whiteSpace: 'nowrap',
  color: getColors().purpleAccent[200],
  marginTop: '20px',
  marginBottom: '20px',
}));

export const StyledSvg = styled('svg')(({ theme }) => ({
  position: 'absolute',
  top: '0',
  left: '0',
  height: '0.98em',
  width: 'full',
  fill: getColors().purpleAccent[200],
  fontSize:"28px"
}));

export const StyledP = styled('p')(({ theme }) => ({
  marginTop: '20px',
  color: getColors().grey[700],
}));

export const StyledButton = styled('a')(({ theme }) => ({
  backgroundColor: getColors().grey[900],
  borderRadius: '40px',
  color:getColors().grey[100],
  fontFamily: 'medium',
  padding: '8px 12px',
  fontSize: 'text-sm',
  border:"2px solid",
  marginTop: '8px',
  '&:hover': {
    transform: 'scale(1.2)',
    transition: 'all 500ms ease-in-out',
  },
}));
