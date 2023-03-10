import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';

import { PresentationDetails } from './Presentation';
import { PRESENTATIONS } from '../../data/presentations';

export function Presentations() {
  return (
    <Container>
      <h1>Presentations</h1>
      <Grid container spacing={3}>
        {PRESENTATIONS.map((presentation) => {
          return (
            <Grid item xs={12} sm={12} md={6} key={presentation.name}>
              <PresentationDetails presentation={presentation} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
