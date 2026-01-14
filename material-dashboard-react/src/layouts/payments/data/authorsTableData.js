/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import LogoAsana from "assets/images/small-logos/logo-asana.svg";
import logoGithub from "assets/images/small-logos/github.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";

import { Grid, Typography } from "@mui/material";

import { useState, useMemo } from "react";

export default function data() {
  const Employee = ({ id }) => (
    <MDBox lineHeight={1}>
      <MDTypography variant="button" fontWeight="medium">
        {id}
      </MDTypography>
    </MDBox>
  );

  const Salary = ({ amount }) => (
    <MDTypography variant="caption" fontWeight="medium">
      ₹{amount.toLocaleString()}
    </MDTypography>
  );

  const Approval = ({ value }) => {
    const color =
      value === "approved" || value==="approve"
        ? "success"
        : value === "rejected"||value=='reject'
        ? "error"
        : "warning";

    return (
      <MDBadge
        variant="gradient"
        color={color}
        size="sm"
        badgeContent={value}
      />
    );
  };

  const Status = ({ value }) => (
    <MDBadge
      //variant="outlined"
      color={value === "paid" ? "success" : "warning"}
      size="sm"
      badgeContent={value}
    />
  );

  return {
    columns: [
      { Header: "id", accessor: "id", align: "left" },
      { Header: "employee id", accessor: "employee_id", align: "left" },
      { Header: "base salary", accessor: "base_salary", align: "left" },
      { Header: "increment", accessor: "increment", align: "left" },
      { Header: "total pay", accessor: "total_pay", align: "left" },
      { Header: "hr approval", accessor: "hr_approval", align: "left" },
      { Header: "status", accessor: "status", align: "left" },
      { Header: "timestamp", accessor: "timestamp", align: "left" },
      // { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        id: 1,
        employee_id: <Employee id="1" />,
        base_salary: <Salary amount={50000} />,
        increment: <Salary amount={5000} />,
        total_pay: <Salary amount={55000} />,
        hr_approval: <Approval value="approved" />,
        status: <Status value="paid" />,
        timestamp: (
          <MDTypography variant="caption">
            01/12/24 10:30
          </MDTypography>
        ),
        action: 
        <Grid container spacing={1}>
          <Grid item>
            <Approval value="approve" />
          </Grid>
          <Grid item>
            <Approval value="reject" />
          </Grid>
        </Grid>,

      },
      {
        id: 2,
        employee_id: <Employee id="2" />,
        base_salary: <Salary amount={45000} />,
        increment: <Salary amount={3000} />,
        total_pay: <Salary amount={48000} />,
        hr_approval: <Approval value="pending" />,
        status: <Status value="pending" />,
        timestamp: (
          <MDTypography variant="caption" >
            03/12/24 09:15
          </MDTypography>
        ),
      },
      {
        id: 3,
        employee_id: <Employee id="3" />,
        base_salary: <Salary amount={60000} />,
        increment: <Salary amount={0} />,
        total_pay: <Salary amount={60000} />,
        hr_approval: <Approval value="approved" />,
        status: <Status value="pending" />,
        timestamp: (
          <MDTypography variant="caption" >
            05/12/24 14:50
          </MDTypography>
        ),
      },
    ],
  };
}
