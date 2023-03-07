import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { SOFTWARE_PROJECTS } from "../../data/software-projects-data";
import { GithubProject } from "./github-project";
import { ForwardRefLink } from "../Link";

export const SoftwareProjects = () => (
  <Container>
    <h1>Software Projects</h1>
    {SOFTWARE_PROJECTS.map(project => {
      return <GithubProject key={project.name} project={project} />;
    })}
    <Box sx={{ paddingY: 2 }}>
      <Button
        variant="contained"
        component={ForwardRefLink}
        to="/software-projects/all-github-projects"
      >
        All Github Projects
      </Button>
    </Box>
  </Container>
);
