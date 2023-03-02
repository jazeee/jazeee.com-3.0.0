import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { PRESENTATIONS } from "../../data/presentations";
import { PresentationDetails } from "../../components/presentations/presentation-details";
import { Layout } from "../../components/layout";
import { SEO } from "../../components/seo";

export const Presentations = () => (
  <Container>
    <h1>Presentations</h1>
    <Grid container spacing={2}>
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

const PresentationsPage = () => (
  <Layout>
    <SEO title="Presentations" />
    <Presentations />
  </Layout>
);

export default PresentationsPage;
