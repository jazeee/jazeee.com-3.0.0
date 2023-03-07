import React from "react";
import Container from "@mui/material/Container";
import { PUBLICATIONS } from "../../data/publications";
import { Publication } from "../../components/publications/publication";

export const Publications = () => (
  <Container>
    <h1>Publications</h1>
    {PUBLICATIONS.map(publication => {
      return <Publication key={publication.name} publication={publication} />;
    })}
  </Container>
);
