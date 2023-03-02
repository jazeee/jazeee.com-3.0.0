import React, { useState } from "react";
// import Loadable from "react-loadable";
import { Layout } from "../../components/layout";
import { SEO } from "../../components/seo";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { skills } from "../../data/utils";
import * as classNames from "./skills-plots.module.css";
import { ForwardRefLink } from "../../components/link";

function Loading(props) {
  if (props.error) {
    return (
      <div>
        Error! <button onClick={props.retry}>Retry</button>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}

// const LoadablePlot = Loadable({
//   loader: () => import("../../components/skills/plot"),
//   render(loaded, props) {
//     let Component = loaded.SkillsPlot;
//     return <Component {...props} />;
//   },
//   loading() {
//     return <Loading />;
//   },
// });

const { skillTypes } = skills;
export const SkillsPlotWithChooser = () => {
  const [skillType, setSkillType] = useState(skillTypes[0]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const selectItem = newSkillType => {
    setSkillType(newSkillType);
    setAnchorEl(null);
  };
  return (
    <Container>
      <h1>
        Skills
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
          variant="contained"
          color="primary"
          className={classNames.skillChooser}
        >
          {skillType}
          <ArrowDropDownIcon />
        </Button>
      </h1>
      <Grid container spacing={2}>
        <Menu
          id="plot-chooser"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
        >
          {skillTypes.map(skillType => (
            <MenuItem key={skillType} onClick={() => selectItem(skillType)}>
              {skillType}
            </MenuItem>
          ))}
          <MenuItem
            key="Show All Skills"
            component={ForwardRefLink}
            to="/skills-plots"
          >
            Show All Skills
          </MenuItem>
        </Menu>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          {/* <LoadablePlot showTitle={false} skillType={skillType} /> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export const SkillsPlots = () => (
  <Container>
    <h1>Skill Plots</h1>
    <Grid container spacing={2}>
      {skills.skillTypes.map(skillType => (
        <Grid item xs={12} sm={12} md={6} key={skillType}>
          {/* <LoadablePlot skillType={skillType} /> */}
        </Grid>
      ))}
    </Grid>
  </Container>
);

const SkillsPlotsPage = () => (
  <Layout>
    <SEO title="Skill Plots" />
    <SkillsPlots />
  </Layout>
);

export default SkillsPlotsPage;
