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
import authorsTableData from "layouts/hrhpayments/data/authorsTableData.js";
import { useState } from "react";
import { blue } from "@mui/material/colors";

function HRHPayments() {
  const { columns, rows } = authorsTableData();
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState("");
  const [searchBy, setSearchBy] = useState("company.name");
  const getText = (el, key) => String(el?.props?.[key] ?? "").toLowerCase();

const filteredRows = rows.filter((r) => {
  const q = search.toLowerCase();
  if (!q) return true;
  switch (searchBy) {
    case "employee_id.id":
      return getText(r.employee_id, "id").includes(q);

    case "id": // payment id
      return String(r.id).toLowerCase().includes(q);

    case "base_salary.salary":
      return getText(r.base_salary, "amount").includes(q);

    case "increment.salary":
      return getText(r.increment, "amount").includes(q);

    case "total_pay.salary":
      return getText(r.total_pay, "amount").includes(q);

    case "hr_approval.value":
      return String(r.hr_approval?.props?.value ?? "")
        .toLowerCase()
        .includes(q);

    case "status.value":
      return String(r.status?.props?.value ?? "")
        .toLowerCase()
        .includes(q);

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
                      Payments
                    </MDTypography>
                  </Grid>
                  <Grid item>
                    <TextField
                      label="Search Record"
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
                      <option value="employee_id.id">Employee ID</option>
                      <option value="id">Payment ID</option>
                      <option value="base_salary.salary">Base Salary</option>
                      <option value="increment.salary">Increment</option>
                      <option value="total_pay.salary">Total Pay</option>
                      <option value="hr_approval.value">HR Approval</option>
                      <option value="status.value">Status</option>
                      {/* <option value="user.email">User Email</option> */}
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

export default HRHPayments;
