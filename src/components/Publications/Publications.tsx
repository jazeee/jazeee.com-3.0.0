import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import { Publication } from './Publication';
import { PUBLICATIONS } from '../../data/publications';

export function Publications() {
  return (
    <Container>
      <h1>Publications</h1>
      <Box display="grid" gap={1}>
        {PUBLICATIONS.map((publication) => {
          return <Publication key={publication.name} publication={publication} />;
        })}
      </Box>
    </Container>
  );
}
