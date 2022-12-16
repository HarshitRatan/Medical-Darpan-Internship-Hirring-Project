import React from "react";
import Container from "@mui/system/Container";
import Stack from '@mui/material/Stack';

const Home = () => {
  
  return (
    <Container>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <h1>This is Home Page</h1>
      </Stack>
    </Container>
  );
};

export default Home;
