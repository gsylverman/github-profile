import { Box, Container } from "@mui/material";
import { FunctionComponent, ReactNode } from "react";

 export interface ILayoutProps {
  children: ReactNode;
}

export const Layout: FunctionComponent<ILayoutProps> = ({ children }) => {
  return (
    <Container sx={{height: '100vh'}}>
      <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', height: '100%', flex: 'wrap'}}>
        {children}
      </Box>
    </Container>
  );
};
