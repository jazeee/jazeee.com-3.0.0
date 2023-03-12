import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { PUBLICATIONS } from './data';
import { Publication } from './Publication';

export function Publications() {
  return (
    <Container>
      <Typography variant="h1" paragraph>
        Publications
      </Typography>
      <Box display="grid" gap={1}>
        {PUBLICATIONS.map((publication) => {
          return <Publication key={publication.name} publication={publication} />;
        })}
      </Box>
    </Container>
  );
}
