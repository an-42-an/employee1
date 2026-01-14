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

function CADashboard() {
  const { sales, tasks } = reportsLineChartData;

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
                title="Revenue"
                count="34k"
                percentage={{
                  color: "success",
                  amount: "+1%",
                  label: "than last month",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={7} ml={1}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={8} lg={5}>
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
            <Grid item xs={12} md={8} lg={5}>
              <MDBox mb={3}>
                <ReportsLineChart
                  color="dark"
                  title="Payments"
                  description="Salaries Paid by month"
                  date="updated 4 min ago"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            {/* <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={3}>
                <ReportsBarChart
                  color="dark"
                  title="Server Load"
                  description="API Requests per day"
                  date="just updated"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid> */}
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
      {/* <Footer /> */}
    </>
  );
}

export default CADashboard;
