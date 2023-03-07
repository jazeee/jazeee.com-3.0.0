import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { PRESENTATIONS } from "../../data/presentations";
import { PresentationDetails } from "./Presentation";

export const Presentations = () => (
  <Container>
    <h1>Presentations</h1>
    <Grid container spacing={3}>
      {PRESENTATIONS.map((presentation, index) => {
        return (
          <Grid item xs={12} sm={12} md={6} key={index}>
            <PresentationDetails presentation={presentation} />
          </Grid>
        );
      })}
    </Grid>
  </Container>
);
