import { FunctionComponent } from "react";
import { Box, Button, List, ListItem } from "@mui/material";
import { PeopleIcon } from "../../../common/icons/PeopleIcon";
import { FacebookIcon } from "../../../common/icons/FacebookIcon";
import { TwitterIcon } from "../../../common/icons/TwitterIcon";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Maybe } from "graphql/jsutils/Maybe";
import profileCardActionsStyles from "./ProfileCardActionsStyles";
import { numberFormatService } from "../../../service/numberFormatService";
import ProfileReposStars from "./ProfileReposStars";
import { Repository } from "../../../__generated__/graphql";

export interface IProfileCardActionsProps {
  totalFollowers: number | undefined;
  totalFollowing: number | undefined;
  twitterUsername: Maybe<string> | undefined;
  email: Maybe<string> | undefined;
  repositoriesNames: Maybe<Maybe<Repository>[]> | undefined;
}

const ProfileCardActions: FunctionComponent<IProfileCardActionsProps> = ({
 totalFollowing,
 totalFollowers,
 twitterUsername,
 email,
 repositoriesNames,
}) => {
  const styles = profileCardActionsStyles();
  const formattedFollowersNumber = numberFormatService.nFormatter(totalFollowers);
  const formattedFollowingNumber = numberFormatService.nFormatter(totalFollowing);

  return (
    <Box padding={ 1 } className={ styles.container }>
      <Button variant="outlined" style={ { backgroundColor: "#F6F8FA", textTransform: 'unset', height: 32, color: 'unset' } } className={ styles.followBtn }>
        Follow
      </Button>
      <Box display="flex" justifyContent="start" alignItems="center" marginTop={1}>
        <Box component="span" className={ styles.followers }>
          <PeopleIcon />
          <Box component="span" fontWeight="bold" marginRight="4px" marginLeft="4px">
            { formattedFollowersNumber }
          </Box>
          followers
        </Box>
        <Box marginRight="4px" marginLeft="4px" component="span">
          <FiberManualRecordIcon sx={ { width: '4px', height: '8px' } }/>
        </Box>
        <Box component="span" className={ styles.followers }>
          <Box component="span" fontWeight="bold" marginRight="2px">
            { formattedFollowingNumber }
          </Box>
          following
        </Box>
        <Box marginRight="4px" marginLeft="4px" component="span">
          <FiberManualRecordIcon sx={ { width: '4px', height: '6px' } }/>
        </Box>
        <Box component="span" className={ styles.followers }>
          <ProfileReposStars repositoriesNames={repositoriesNames} />
        </Box>
      </Box>
      <List>
        <ListItem className={ styles.listItem }>
          <FacebookIcon/>
          <Box className={ styles.faLink } component="span" marginLeft={ 1 }>
            @facebook
          </Box>
        </ListItem>
        { email &&
          <ListItem className={ styles.listItem }>
            <MailOutlineIcon style={ { marginRight: 10, fontSize: '16px' } }/>
            <Box className={ styles.link } component="span">
              { email }
            </Box>
          </ListItem>
        }
        { twitterUsername &&
          <ListItem className={ styles.listItem }>
            <TwitterIcon style={ { marginRight: 10 } }/>
            <Box className={ styles.link } marginLeft={ 1 } component="span">
              { twitterUsername }
            </Box>
          </ListItem>
        }
      </List>
    </Box>
  );
}

export default ProfileCardActions;
