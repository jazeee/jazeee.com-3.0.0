import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { skills } from "../../data/utils";
import { LazyLoadedSkillsPlot } from "./LoadablePlot";

export const SkillsPlots = () => (
  <Container>
    <h1>Skill Plots</h1>
    <Grid container spacing={2}>
      {skills.skillTypes.map(skillType => (
        <Grid item xs={12} sm={12} md={6} key={skillType}>
          <LazyLoadedSkillsPlot skillType={skillType} />
        </Grid>
      ))}
    </Grid>
  </Container>
);
