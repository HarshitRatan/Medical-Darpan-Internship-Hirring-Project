import React from "react";
import Container from "@mui/system/Container";
import Stack from '@mui/material/Stack';
import MyBreadCrumbs from "../component/MyBreadCrumbs";
import SearchFieldComponent from "../component/SearchFieldComponent";
import MyCard from "../component/MyCard";
import Grid from '@mui/material/Grid';

const Home = () => {
  const [searchText, setSearchText] = React.useState("");
  const [data, setData] = React.useState(["1", "2", "3", "4", "5", "6"]);

  const handleSearch = () => {
    console.log("searchText :::: ", searchText);
  }

  return (
    <Container
    // sx={{
    //   border: '2px solid red'
    // }}
    >
      <MyBreadCrumbs />
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={0}
        sx={{ width: '100%', mb: 4 }}
      >
        <SearchFieldComponent value={searchText} setValue={setSearchText} handleSearch={handleSearch} />
      </Stack>
      <Grid container spacing={2}>
        {
          data.map((value) => (
            <Grid item xs={12} sm={6} md={4} key={value}>
              <MyCard />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
};

export default Home;
