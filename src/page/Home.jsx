import React from "react";
import Container from "@mui/system/Container";
import Stack from '@mui/material/Stack';
import MyBreadCrumbs from "../component/MyBreadCrumbs";
import SearchFieldComponent from "../component/SearchFieldComponent";
import MyCard from "../component/MyCard";
import Grid from '@mui/material/Grid';
import recordData from '../data/dataRecord.json';
import LeftSideComponent from "../component/LeftSideComponent";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";

const Home = () => {
  const [searchText, setSearchText] = React.useState("");
  const [data, setData] = React.useState([]);
  const [filterArray, setFilterArray] = React.useState(["Aceclofenac", "500mg"]);

  const category = ["Paracetamol Tablets", "Paracetamol Syrup", "Paracetamol Powder", "Aceclofenac", "Oral Suspension", "Mefenamic Syrup"];
  const strength = ["500mg", "650mg"];
  const manufacture = ["Intas Pharmautical Ltd", "Alkem Laboratories Ltd"];
  const Business = ["Wholesaler", "Manufacturer", "Retailer", "Exporter"];
  const brand = ["Cipmol Paracetamol", "Pandal Paracetamol", "Combiflam", "Crocin Tablets", "Calpol Paracetamol", "Sumo Tablet"];

  const handleSearch = () => {
    console.log("searchText :::: ", searchText);
  }

  const handleDeleteFilterArray = (item) => {
    const newFilterArray = filterArray.filter((value) => value !== item);
    setFilterArray(newFilterArray);
  }

  React.useEffect(() => {
    setData(recordData);
  }, [])

  return (
    <Container sx={{ mb: 20 }}>
      <MyBreadCrumbs />
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={0}
        sx={{ width: '100%', mb: 2 }}
      >
        <SearchFieldComponent value={searchText} setValue={setSearchText} handleSearch={handleSearch} />
      </Stack>

      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        spacing={2}
        sx={{ width: '100%', mb: 2 }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: '600',
            color: '#6f6a6a'
          }}
        >
          Paracetamol
          <span style={{ fontSize: '14px', marginLeft: "5px", fontWeight: '550' }}>(128 Product)</span>
        </Typography>
        {
          filterArray.map((value) => (
            <Button
              key={value}
              variant="container"
              sx={{
                backgroundColor: '#00a69c',
                color: '#e8f1f8',
                borderRadius: '5px',
                height: '25px',
                fontSize: '11px',
                fontWeight: '600',
                "&:hover": {
                  backgroundColor: '#00a69c'
                }
              }}
              endIcon={<CloseIcon />}
              onClick={() => {
                handleDeleteFilterArray(value);
              }}
            >
              {value}
            </Button>
          ))
        }
        {
          filterArray.length > 0 && (
            <IconButton
              sx={{
                fontSize: "14px",
                borderRadius: '0px',
                color: 'red'
              }}
              onClick={() => {
                setFilterArray([]);
              }}
            >
              Remove all
            </IconButton>
          )
        }
      </Stack>

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <LeftSideComponent filterArray={filterArray} setFilterArray={setFilterArray} value={category} heading="Related Category" />
          <LeftSideComponent filterArray={filterArray} setFilterArray={setFilterArray} value={brand} heading="Related Brands" />
          <LeftSideComponent filterArray={filterArray} setFilterArray={setFilterArray} value={Business} heading="Business Type" />
          <LeftSideComponent filterArray={filterArray} setFilterArray={setFilterArray} value={strength} heading="Strength" />
          <LeftSideComponent filterArray={filterArray} setFilterArray={setFilterArray} value={manufacture} heading="Manufacture" />
          <LeftSideComponent filterArray={filterArray} setFilterArray={setFilterArray} value={manufacture} heading="Presciption / Non Presciption" />
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
