import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { PRESENTATIONS } from './data';
import { PresentationDetails } from './Presentation';

export function Presentations() {
  return (
    <Container>
      <h1>Presentations</h1>
      <Grid container spacing={3}>
        {PRESENTATIONS.map((presentation) => {
          const { name, location } = presentation;
          return (
            <Grid item xs={12} sm={12} md={6} key={`${name}-${location}`}>
              <PresentationDetails presentation={presentation} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}
