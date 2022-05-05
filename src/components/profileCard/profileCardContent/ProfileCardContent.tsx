import { FunctionComponent } from "react";
import { CardContent, Typography } from "@mui/material";
import { Maybe } from "graphql/jsutils/Maybe";

export interface IProfileCardContentProps {
  name: Maybe<string> | undefined;
  login: string | undefined;
}

const ProfileCardContent: FunctionComponent<IProfileCardContentProps> = ({ name, login }) => {

  return (
    <CardContent sx={{paddingBottom: 0, paddingLeft: 1}}>
      <Typography variant="h5" component="div" className="mb0">
        { name }
      </Typography>
      <Typography variant="subtitle1" color="text.secondary">
        { login }
      </Typography>
    </CardContent>
  );
}

export default ProfileCardContent;
