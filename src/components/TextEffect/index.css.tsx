import { styled } from "@mui/material/styles";
import { getColors } from "@/layout/Theme/themes";
import { Box, Card, Typography } from "@mui/material";

// Styled Components
export const HeaderSection = styled(Box)({
  margin: '0 0',
  padding: '1rem 6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const TitleWrapper = styled(Box)({
  display: 'grid',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'skew(0, -10deg)',
});

export const SweetTitle = styled(Typography)(({theme})=>({
  order: 2,
  color: getColors().grey[900],
  fontWeight: 900,
  textTransform: 'uppercase',
  fontSize: 'clamp(3rem,5vw, 6rem)',
  lineHeight: '0.75em',
  textAlign: 'center',
  textShadow: `3px 1px 1px ${getColors().blueAccent[900]}, 2px 2px 1px ${getColors().purpleAccent[100]}, 4px 2px 1px ${getColors().blueAccent[900]}, 3px 3px 1px ${getColors().purpleAccent[100]}, 5px 3px 1px ${getColors().blueAccent[900]}, 4px 4px 1px ${getColors().purpleAccent[100]}, 6px 4px 1px ${getColors().blueAccent[900]}, 5px 5px 1px ${getColors().purpleAccent[100]}, 7px 5px 1px ${getColors().blueAccent[900]}, 6px 6px 1px ${getColors().blueAccent[100]}, 8px 6px 1px ${getColors().purpleAccent[900]}, 7px 7px 1px ${getColors().blueAccent[100]}, 9px 7px 1px ${getColors().purpleAccent[900]}`,
  '& span': {
    display: 'block',
    position: 'relative',
    '&:before': {
      content: 'attr(data-text)',
      position: 'absolute',
      textShadow: `2px 2px 1px ${getColors().purpleAccent[100]}, -1px -1px 1px ${getColors().purpleAccent[100]}, -2px 2px 1px ${getColors().purpleAccent[100]}, 1px -1px 1px ${getColors().purpleAccent[100]}`,
      zIndex: 1,
    },
    '&:nth-child(1)': {
      paddingBottom: '1.25rem',
    },
    '&:nth-child(2)': {
      paddingLeft: '0.8rem',
    },
  },
}));

export const TopTitle = styled(Typography)(({theme})=>({
  order: 1,
  textAlign: 'center',
  display: 'block',
  fontSize: 'clamp(1rem, 4vw, 1.5rem)',
  marginBottom: '1rem',
  color: getColors().grey[400],
}));

export const BottomTitle = styled(Typography)(({theme})=>({
  order: 3,
  textAlign: 'center',
  display: 'block',
  fontSize: 'clamp(1rem, 4vw, 1.5rem)',
  marginTop: '1rem',
  color: getColors().grey[400],

}));


