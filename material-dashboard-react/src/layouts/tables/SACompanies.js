/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import AddIcon from "@mui/icons-material/Add";
import {
  IconButton,
  Popover,
  TextField,
  Box,
  Button,
} from "@mui/material";
import { useState } from "react";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function SACompanies() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState("");
  const getAuthorText = (author) => {
    const { name = "", email = "" } = author?.props || {};
    return `${name}`.toLowerCase();
  };
  const filteredRows = rows.filter((r) =>
    getAuthorText(r.company).includes(search.toLowerCase())
  );
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <Grid container spacing={4}>
                  <Grid item>
                    <MDTypography variant="h6" color="white">
                      Companies
                    </MDTypography>
                  </Grid>
                  <Grid item>
                    {/* <IconButton > */}
                      <AddIcon onClick={(e) => setAnchorEl(e.currentTarget)} color="white"/>
                    {/* </IconButton> */}
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Search Company"
                      size="small"
                      fullWidth
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      sx={{ mb: 1,
                          input: { color: "#fff" },
                          label: { color: "#fff" },
                          "& .MuiInputBase-input": { color: "#fff" },
                          "& .MuiInputLabel-root": { color: "#fff" },
                          "& .MuiInputLabel-root.Mui-focused": { color: "#fff" },

                          "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#fff",
                          },
                          "&:hover .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#fff",
                          },
                          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                            borderColor: "#fff",
                          },
                        }}
                    />
                  </Grid>
                </Grid>
                
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows:filteredRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={() => setAnchorEl(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            PaperProps={{
                  sx: ({ palette }) => ({
                    backgroundColor:
                      palette.mode === "dark"
                        ? palette.background.card
                        : palette.white.main,
                  }),
                }}
          >
            <Box p={2} sx={{ width: 220 }}>
              <TextField label="Company Name" size="small" fullWidth />
              <TextField label="Company Email" size="small" fullWidth sx={{ mt: 1}} />
              <TextField label="Admin Name" size="small" fullWidth sx={{ mt: 1}} />
              <TextField label="Admin Email" size="small" fullWidth sx={{ mt: 1,mb:1}} />
              <Button>Submit</Button>
            </Box>
          </Popover>
        </Grid>
      </MDBox>
      {/* <Footer /> */}
    </DashboardLayout>
  );
}

export default SACompanies;
