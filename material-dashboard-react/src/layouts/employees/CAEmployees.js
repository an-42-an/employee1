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

import {useContext} from "react";
import { AuthContext } from "context";
// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";
import AddIcon from "@mui/icons-material/Add";
import {
  IconButton,
  Popover,
  TextField,
  Box,
  Button,
} from "@mui/material";
// Data
import authorsTableData from "layouts/employees/data/authorsTableData";
import { useState } from "react";
import { blue } from "@mui/material/colors";

function CAEmployees() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [addEl, setAddEl] = useState(null);
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("company.name");
  const onSuperiorClick = (id) => {
    setSearch(String(id));
    setSearchBy("id");
  };

  const onView = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const {user} = useContext(AuthContext);
  const role=user.role;
  const { columns, rows } = authorsTableData({ onSuperiorClick, onView });
  const getText = (el, key) => el?.props?.[key]?.toLowerCase?.() || "";
  const filteredRows = rows.filter((r) => {
    const q = search.toLowerCase();
    switch (searchBy) {
      case "id":
        return String(r.emp_id).includes(q);

      case "user.name":
        return getText(r.user, "name").includes(q);

      case "user.email":
        return getText(r.user, "email").includes(q);

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
                      Employees
                    </MDTypography>
                  </Grid>
                  {(role==='ca'||role==='hrh')?<Grid item>
                      <AddIcon onClick={(e) => setAddEl(e.currentTarget)} color="white"/>
                  </Grid>:null}
                  <Grid item>
                    <TextField
                      label="Search Employee"
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
                      <option value="id">Employee ID</option>
                      <option value="user.name">Name</option>
                      <option value="user.email">Email</option>
                    </MDInput>
                  </Grid>
                </Grid>
              </MDBox>
              <Popover
                open={Boolean(anchorEl)}
                anchorReference="anchorPosition"
                anchorPosition={{
                  top: window.innerHeight / 2,
                  left: window.innerWidth / 2,
                }}
                PaperProps={{
                  sx: {
                    bgcolor: "background.paper",
                    color: "text.primary",
                  },
                }}
                onClose={() => setAnchorEl(null)}
              >
                <Box p={2}>
                  <MDTypography variant="caption">Base Salary: ₹80,000</MDTypography>
                  <br/>
                  <MDTypography variant="caption">Leave / Month: 2</MDTypography>
                  <br/>
                  <MDTypography variant="caption">Status: Active</MDTypography>
                  <br/>
                  <MDTypography variant="caption">Created at: 2020/09/09</MDTypography>
                </Box>
              </Popover>
              <Popover
                open={Boolean(addEl)}
                anchorEl={addEl}
                onClose={() => setAddEl(null)}
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
                <MDBox p={2} sx={{ width: 220 }}>
                  <TextField label="Name" size="small" fullWidth />
                  <TextField label="Department" size="small" fullWidth sx={{ mt: 1}} />
                  <TextField label="Designation" size="small" fullWidth sx={{ mt: 1}} />
                  <TextField label="Grade" size="small" fullWidth sx={{ mt: 1}} />
                  <TextField label="Role" size="small" fullWidth sx={{ mt: 1}} />
                  <TextField label="Employer ID" size="small" fullWidth sx={{ mt: 1}} />
                  <TextField label="Base Salary" size="small" fullWidth sx={{ mt: 1,mb:1}} />
                  <Button>Submit</Button>
                </MDBox>
              </Popover>
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

export default CAEmployees;
