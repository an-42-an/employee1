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
import {IconButton} from "@mui/material";
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

import {useContext} from "react";
import { AuthContext } from "context";

import { Grid, Typography } from "@mui/material";

import { useState, useMemo } from "react";

export default function data({ onSuperiorClick, onView, openLeave }) {
  const {user} = useContext(AuthContext);
  const role=user.role;
  // const [searchBy, setSearchBy] = useState("user");
  // const [query, setQuery] = useState("");
  const Author = ({ image, name, email,color="dark" }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium" color={color}>
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "emp id", accessor: "emp_id" },
      { Header: "name & email", accessor: "user" },
      { Header: "user id & role", accessor: "user_role" },
      { Header: "department", accessor: "department" },
      { Header: "designation & grade", accessor: "designation" },
      { Header: "actions", accessor: "actions" },
    ],
    rows: [
      {
        emp_id: 1,
        user: <Author image={team3} name="John" email="john@mail.com" />,
        user_role: <Job title="12" description="HR" />,
        designation: <Job title="Manager" description="G5" />,
        department: <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {(role=='dept')?"IT":(role=='fin')?"FINANCE":"HR"}</MDTypography>,
        superior: (
          <MDTypography
            variant="caption"
            sx={{ cursor: "pointer", color: "info.main" }}
            onClick={() => onSuperiorClick(2)}
          >
            2
          </MDTypography>
        ),
        actions: (
          <Grid container spacing={1}>
            {/* <Grid item>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                Edit
              </MDTypography>
            </Grid> */}
            <Grid item>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium"
              onClick={(e) => onView(e)}>
                View
              </MDTypography>
            </Grid>
            <Grid item>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium"
              onClick={openLeave}>
                Leave
              </MDTypography>
            </Grid>
          </Grid>
        ),
      },
      {
        emp_id: 2,
        user: <Author image={team2} name="Doe" email="doe@mail.com" />,
        user_role: <Job title="11" description="HR" />,
        designation: <Job title="HR" description="G10" />,
        department: <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {(role=='dept')?"IT":(role=='fin')?"FINANCE":"HR"}</MDTypography>,
        superior: (
          <MDTypography
            variant="caption"
            sx={{ cursor: "pointer", color: "info.main" }}
            onClick={() => onSuperiorClick(2)}
          >
            2
          </MDTypography>
        ),
        actions: (
          <Grid container spacing={1}>
            {/* <Grid item>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                Edit
              </MDTypography>
            </Grid> */}
            <Grid item>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium"
              onClick={(e) => onView(e)}>
                View
              </MDTypography>
            </Grid>
            {/* <Grid item>
              <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
                Delete
              </MDTypography>
            </Grid> */}
          </Grid>
        ),
      },
    ],
  };
}
