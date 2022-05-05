import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export type ProfileCardClasses =
  | 'cardMedia' | 'card' | 'cardContainer';

const profileCardStyles = makeStyles<Theme, {}, ProfileCardClasses>(
  (theme) => ({
    cardContainer: {
      padding: 10,
    },
    card: {
      maxWidth: 300,
      minWidth: 200,
      minHeight: 250,
      margin: '0 auto',
      padding: 10
    },
    cardMedia: {
      maxWidth: '90%',
      margin: '20px auto 0',
      borderRadius: '50%',
    },
  }),
  { name: 'Profile_Card' }
);

export default profileCardStyles;
