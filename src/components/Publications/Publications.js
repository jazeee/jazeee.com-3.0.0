import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { PUBLICATIONS } from "../../data/publications";
import { Publication } from "./Publication";

export const Publications = () => (
  <Container>
    <h1>Publications</h1>
    <Box display="grid" gap={1}>
      {PUBLICATIONS.map(publication => {
        return <Publication key={publication.name} publication={publication} />;
      })}
    </Box>
  </Container>
);
