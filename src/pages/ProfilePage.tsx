import { FunctionComponent } from "react";
import ProfileCard from "../components/profileCard/ProfileCard";
import { Layout } from "../components/layout/Layout";

const ProfilePage: FunctionComponent = () => {

  return (
    <Layout>
      <ProfileCard/>
    </Layout>
  );
}

export default ProfilePage;
