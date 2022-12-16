import React from "react";
import Container from "@mui/system/Container";
import Stack from '@mui/material/Stack';
import MyBreadCrumbs from "../component/MyBreadCrumbs";
import SearchFieldComponent from "../component/SearchFieldComponent";
import MyCard from "../component/MyCard";
import Grid from '@mui/material/Grid';
import recordData from '../data/dataRecord.json';
import LeftSideComponent from "../component/LeftSideComponent";

const Home = () => {
  const [searchText, setSearchText] = React.useState("");
  const [data, setData] = React.useState([]);

  const category = ["Paracetamol Tablets", "Paracetamol Syrup", "Paracetamol Powder", "Aceclofenac", "Oral Suspension", "Mefenamic Syrup"];
  const strength = ["500 mg", "650mg"];
  const manufacture = ["Intas Pharmautical Ltd", "Alkem Laboratories Ltd"];
  const Business = ["Wholesaler", "Manufacturer", "Retailer", "Exporter"];
  const brand = ["Cipmol Paracetamol", "Pandal Paracetamol", "Combiflam", "Crocin Tablets", "Calpol Paracetamol", "Sumo Tablet"];

  const handleSearch = () => {
    console.log("searchText :::: ", searchText);
  }

  React.useEffect(() => {
    setData(recordData);
  }, [])

  return (
    <Container
      sx={{
        // border: '2px solid red',
        mb: 20
      }}
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
        <Grid item xs={2}>
          <LeftSideComponent value={category} heading="Related Category" />
          <LeftSideComponent value={brand} heading="Related Brands" />
          <LeftSideComponent value={Business} heading="Business Type" />
          <LeftSideComponent value={strength} heading="Strength" />
          <LeftSideComponent value={manufacture} heading="Manufacture" />
          <LeftSideComponent value={manufacture} heading="Presciption / Non Presciption" />
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={2}>
            {
              data.map((val) => (
                <Grid item xs={12} sm={6} md={4} lg={4} key={val.id}>
                  <MyCard value={val} />
                </Grid>
              ))
            }
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
