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
import SACompanies from "layouts/tables/SACompanies.js";

function Tables() {
  //const { sales, tasks } = reportsLineChartData;
  const {user} = useContext(AuthContext);
  const role=user.role;
  return (
       <> 
       {(role=='sa')?<SACompanies/>:<></>} 
       </>
  );
}

export default Tables;
