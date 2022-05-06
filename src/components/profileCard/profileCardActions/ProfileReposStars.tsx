import { FunctionComponent, useEffect, useState } from "react";
import { Box } from "@mui/material";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { Repository, useGetRepositoryStarsCountLazyQuery } from "../../../__generated__/graphql";
import { Maybe } from "graphql/jsutils/Maybe";
import { useParams } from "react-router-dom";

export interface IProfileReposStarsProps {
  repositoriesNames: Maybe<Maybe<Repository>[]> | undefined;
}

const ProfileReposStars: FunctionComponent<IProfileReposStarsProps> = ({ repositoriesNames }) => {
  const [stars, setStars] = useState(0);
  const { loginId } = useParams();
  const [getStarsCount] = useGetRepositoryStarsCountLazyQuery();

  useEffect(() => {
    repositoriesNames?.forEach(repo => {
    //   const fetchRepoStars = async () => {
    //     const { data } = await getStarsCount({
    //       variables: {
    //         owner: loginId ?? '',
    //         name: repo?.name ?? '',
    //       }
    //     })
    //     const stars = data?.repository?.stargazers.totalCount || 0;
    //     setStars((prev => prev + stars));
    //   }
    //   fetchRepoStars();
    });

  }, [repositoriesNames]);

  // useEffect(() => {
  //   console.log(stars);
  // }, [stars])

  return (
    <>
      <StarOutlineIcon sx={ { width: '16px', height: '16px', display: 'inline-block', verticalAlign: 'middle' } }/>
      <Box component="span" fontWeight="bold" marginRight="2px">
        { 1 }
      </Box>
      Stars
    </>
  );
}

export default ProfileReposStars;
