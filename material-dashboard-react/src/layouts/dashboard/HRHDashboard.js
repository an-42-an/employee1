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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
// Creative Tim components
import MDBadge from "components/MDBadge";
import MDTypography from "components/MDTypography";

// MUI components
import { Popover, Box, TextField, Button } from "@mui/material";
import { useState } from "react";

// Material Dashboard 2 React example components
//import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import { scales } from "chart.js";

function HRHDashboard() {
  const { sales, tasks } = reportsLineChartData;
  const [leaveReqAnchor, setLeaveReqAnchor] = useState(null);
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);

  return (
    <><DashboardNavbar/>
      <MDBox py={3}>
        <Grid container spacing={7}>
          <Grid item xs={12} md={6} lg={3.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="weekend"
                title="Employees"
                count={128}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "than last year",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Payments"
                count="28k"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3.5}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="store"
                title="Pending Payment Approvals"
                count="147"
                // percentage={{
                //   color: "success",
                //   amount: "+1%",
                //   label: "than last month",
                // }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <Popover
            open={Boolean(leaveReqAnchor)}
            anchorEl={leaveReqAnchor}
            onClose={() => setLeaveReqAnchor(null)}
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            PaperProps={{
                  sx: ({ palette }) => ({
                    backgroundColor:
                      palette.mode === "dark"
                        ? palette.background.card
                        : palette.white.main,
                  }),
                }}
            >
            <MDBox p={2} minWidth={240}>
                <MDTypography variant="caption" color="text.secondary">
                Select Leave Dates
                </MDTypography>

                <TextField
                type="date"
                size="small"
                fullWidth
                sx={{ mt: 1 }}
                value={from || ""}
                onChange={(e) => setFrom(e.target.value)}
                />

                <TextField
                type="date"
                size="small"
                fullWidth
                sx={{ mt: 1 }}
                value={to || ""}
                onChange={(e) => setTo(e.target.value)}
                />

                <MDBox mt={2} textAlign="right">
                <MDButton
                    variant="contained"
                    size="small"
                    disabled={!from || !to}
                    onClick={() => {
                    // submit API here
                    setLeaveReqAnchor(null);
                    }}
                >
                    Submit
                </MDButton>
                </MDBox>
            </MDBox>
        </Popover>

        <MDBox mt={7} ml={1}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="success"
                  title="Employees"
                  description="New Employees by month"
                  date="updated 2 days ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="info"
                  title="Payments"
                  description="Salaries Paid by month"
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Attrition"
                  description="Attrition Month-wise"
                  date="just last week"
                  chart={sales}
                />
              </MDBox>
            </Grid> 
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={8}>
              {/* <Projects /> */}
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              {/* <OrdersOverview /> */}
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      
        <MDButton
            variant="gradient"
            color="info"
            size="medium"
            onClick={(e) => setLeaveReqAnchor(e.currentTarget)}
            sx={{ cursor: "pointer", mt:2,mb:2 }}
        >Request Leave</MDButton>
      {/* <Footer /> */}
    </>
  );
}

export default HRHDashboard;
