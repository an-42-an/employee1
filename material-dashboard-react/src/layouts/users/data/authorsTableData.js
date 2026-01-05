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
    
  const [searchBy, setSearchBy] = useState("user");
  const [query, setQuery] = useState("");
  const Author = ({ image, name, email,color="" }) => (
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
      { Header: "id", accessor: "id", align: "left" },
      { Header: "user", accessor: "user_id", width: "45%", align: "left" },
      { Header: "employee id", accessor: "company", align: "left" },
      { Header: "created at", accessor: "created_at", align: "left" },
      
      //{ Header: "action", accessor: "action", align: "left" },
    ],
    rows: [
      {
        company: <Author image={LogoAsana} name="1" email="Asana" />,
        id: 1,
        user_id: <Author image={team2} name="John Michael" color="error" email="john@creative-tim.com" />,
        created_at: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
      },
      {
        company: <Author image={logoGithub} name="2" email="Github" />,
        id: 2,
        user_id: <Author image={team3} name="Alexa Liras" color="error" email="alexa@creative-tim.com" />,
        created_at: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
      },
      {
        company: <Author image={logoAtlassian} name="3" email="Atlassian" />,
        id: 3,
        user_id: <Author image={team4} name="Laurent Perrier" color="error" email="laurent@creative-tim.com" />,
        created_at: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
      },
      {
        company: <Author image={logoSlack} name="4" email="Slack" />,
        id: 4,
        user_id: <Author image={team3} name="Michael Levi" color="error" email="michael@creative-tim.com" />,
        created_at: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
      },
      {
        company: <Author image={logoSpotify} name="5" email="Spotify" />,
        id: 5,
        user_id: <Author image={team3} name="Richard Gran" color="error" email="richard@creative-tim.com" />,
        created_at: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
      },
      {
        company: <Author image={logoInvesion} name="6" email="Invision" />,
        id: 6,
        user_id: <Author image={team4} name="Miriam Eric" color="error" email="miriam@creative-tim.com" />,
        created_at: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        
      },
      {
        company: <Author image={logoInvesion} name="7" email="Invision" />,
        id: 7,
        user_id: <Author image={team4} name="Doe Eric" email="doe@creative-tim.com" />,
        created_at: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            14/09/21
          </MDTypography>
        ),
        
      },
    ]

  };
}
