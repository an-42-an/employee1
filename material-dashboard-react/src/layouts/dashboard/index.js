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
import {useContext} from "react";
import { AuthContext } from "context";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Dashboard components
import SADashboard from "layouts/dashboard/SADashboard.js";
import CADashboard from "layouts/dashboard/CADashboard.js";
import HRHDashboard from "layouts/dashboard/HRHDashboard.js";
import CXODashboard from "layouts/dashboard/CXODashboard.js";
import FINDashboard from "./FINDashboard";
import REGDashboard from "./REGDashboard";
import TEMPDashboard from "./TEMPDashboard";

function Dashboard() {
  //const { sales, tasks } = reportsLineChartData;
  const {user} = useContext(AuthContext);
  const role=user.role;
  return (
    <DashboardLayout>
      {/* <DashboardNavbar /> */}
        {(role=='sa')?<SADashboard/>:(role=='ca')?<CADashboard/> :
        (role=='hrh')?<HRHDashboard/>:(role=='cxo'||role=='hr'||role=='dept')?<CXODashboard/>:
        (role=='fin')?<FINDashboard/>:(role=='reg')?<REGDashboard/>:
        (role=='temp')?<TEMPDashboard/>:<></>}
    </DashboardLayout>
  );
}

export default Dashboard;
