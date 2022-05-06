import { FunctionComponent, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import profileCardStyles from "./ProfileCardStyles";
import { useGetUserQuery, User } from "../../__generated__/graphql";
import { useParams } from "react-router-dom";
import ProfileCardContent from "./profileCardContent/ProfileCardContent";
import ProfileCardActions from "./profileCardActions/ProfileCardActions";

const ProfileCard: FunctionComponent = () => {
  const styles = profileCardStyles();
  const { loginId } = useParams();
  const [userData, setUserData] = useState<User>();
  const { data, loading, error } = useGetUserQuery({
    variables: {
      login: loginId ?? '',
      number_of_repos: 100,
    },
  });
  useEffect(() => {
    if (data) {
      setUserData(data.user as User);
    }
  }, [data]);

  if (loading) {
    return <CircularProgress/>
  }

  return (
    <Box className={ styles.cardContainer }>
      <Card className={ styles.card }>
        <CardMedia
          component="img"
          image={ userData?.avatarUrl }
          alt="picture"
          classes={ { root: styles.cardMedia } }
        />
        <ProfileCardContent name={ userData?.name } login={ userData?.login }/>
        <ProfileCardActions
          totalFollowers={ userData?.followers.totalCount }
          totalFollowing={ userData?.following.totalCount }
          twitterUsername={ userData?.twitterUsername }
          email={ userData?.email }
          repositoriesNames={userData?.repositories?.nodes}
        />
      </Card>
    </Box>
  );
}

export default ProfileCard;
