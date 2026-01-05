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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import {
  IconButton,
  Popover,
  TextField,
  Box,
  Button,
} from "@mui/material";
// Data
import authorsTableData from "layouts/users/data/authorsTableData";
import projectsTableData from "layouts/users/data/projectsTableData";
import { useState } from "react";
import { blue } from "@mui/material/colors";

function Users() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("company.name");
  const getText = (el, key) => el?.props?.[key]?.toLowerCase?.() || "";
  const filteredRows = rows.filter((r) => {
    const q = search.toLowerCase();
    switch (searchBy) {
      case "company.name":
        return getText(r.company, "name").includes(q);
      case "company.email":
        return getText(r.company, "email").includes(q);
      case "id":
        return String(r.id).includes(q);
      case "user.name":
        return getText(r.user_id, "name").includes(q);
      case "user.email":
        return getText(r.user_id, "email").includes(q);
      default:
        return true;
    }
  });

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
                      Users
                    </MDTypography>
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Search User"
                      size="small"
                      fullWidth
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      sx={{ mb: 1,
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
                  <Grid item>
                    <MDInput
                      select
                      size="small"
                      value={searchBy}
                      onChange={(e) => setSearchBy(e.target.value)}
                      SelectProps={{ native: true }}
                      sx={{
                        "& select": {
                          color: "#fff", // selected value
                        },
                        "& option": {
                          color: "#000", // dropdown options
                          backgroundColor: "#fff",
                        },
                        "& .MuiSvgIcon-root": {
                          color: "#fff", // dropdown arrow
                        },
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

                    >
                      <option value="company.name">Employee ID</option>
                      <option value="company.email">Company Name</option>
                      <option value="id">User ID</option>
                      <option value="user.name">User Name</option>
                      <option value="user.email">User Email</option>
                    </MDInput>
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
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Users;
