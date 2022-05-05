import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export type ProfileCardActionsClasses = 'listItem' | 'dot' | 'followBtn' | 'followers' | 'container' | 'link' | 'faLink' | 'links';

const profileCardActionsStyles = makeStyles<Theme, {}, ProfileCardActionsClasses>(
  (theme) => ({
    container: {
      fontSize: '14px',
      color: '#000',
    },
    followBtn: {
      width: '100%',
    },
    followers: {
      fontSize: '14px',
      '&:hover': {
        color: theme.palette.primary.main,
        cursor: 'pointer',
      }
    },
    links: {
      // lineHeight: 1,
    },
    link: {
      '&:hover': {
        color: theme.palette.primary.main,
        textDecoration: 'underline',
        cursor: 'pointer',
      }
    },
    faLink: {
      '&:hover': {
        textDecoration: 'underline',
        cursor: 'pointer',
      }
    },
    dot: {
      width: '8px',
      height: '8px',
    },
    listItem: {
      margin: '10px 0!important',
      padding: '0!important',
    },
  }),
  { name: 'Profile_CardActions' }
);

export default profileCardActionsStyles;
