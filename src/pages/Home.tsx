import { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Layout } from "../components/layout/Layout";
import { useNavigate } from "react-router-dom";

const Home: FunctionComponent = () => {
  const [profileId, setProfileId] = useState('');
  const navigate = useNavigate();

  const handleProfileSet = (e: ChangeEvent) => {
    const element = e.target as HTMLInputElement;
    setProfileId(element.value);
  };

  const goToProfile = () => {
    if (profileId.length) {
      navigate(profileId);
    }
  };

  return (
    <Layout>
      <Box display="flex" flexDirection="column">
        <Box marginBottom={ 2 }>
          <TextField
            onChange={handleProfileSet}
            value={profileId}
            label="profileId"
            variant="standard"
          />
        </Box>
        <Button
          onClick={goToProfile}
          variant="contained">
          Go to profile
        </Button>
      </Box>
    </Layout>
  );
}

export default Home;
