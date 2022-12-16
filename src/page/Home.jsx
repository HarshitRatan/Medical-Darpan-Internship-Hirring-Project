import React from "react";
import Container from "@mui/system/Container";
import Stack from '@mui/material/Stack';
import MyBreadCrumbs from "../component/MyBreadCrumbs";
import SearchFieldComponent from "../component/SearchFieldComponent";

const Home = () => {
  const [searchText, setSearchText] = React.useState("");
  const handleSearch = () => {
    console.log("searchText :::: ", searchText);
  }

  return (
    <Container
      sx={{
        border: '2px solid red'
      }}
    >
      <MyBreadCrumbs />
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={0}
        sx={{ width: '100%' }}
      >
        <SearchFieldComponent value={searchText} setValue={setSearchText} handleSearch={handleSearch} />
      </Stack>
    </Container>
  );
};

export default Home;
