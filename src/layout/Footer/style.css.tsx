// style.css.tsx

import { styled } from "@mui/material/styles";
import { Typography, Link } from "@mui/material";

export const FooterContainer = styled('footer')({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  padding: '40px 20px',
  zIndex: 5,
});

export const ColumnContainer = styled('div')({
  width: '100%',
  maxWidth: '48rem', // max-w-4xl
  margin: 'auto',
  display: 'flex',
  gridTemplateColumns: 'repeat(2, 1fr)', // grid-cols-2
  gap: '20px', // space-y-4
  justifyContent: 'space-around',
  alignItems: 'start',
  flexDirection:"row"
});

export const Column = styled('div')({
  textAlign: 'left',
  marginBottom: '20px', // mb-5 sm:mb-0
});

export const Title = styled(Typography)({
  textTransform: 'uppercase',
  fontSize: '0.875rem', // text-sm
  fontWeight: 'bold',
  color: '#4B5563', // text-fun-gray
  textAlign:"center"
});

export const FooterLink = styled(Link)({
  color: 'white',
  textDecoration: 'none',
  display: 'block',
  marginBottom: '10px', // my-4
  '&:hover': {
    textDecoration: 'underline',
  },
});

// Define more styled components as per your component's needs
