import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { InternalLink } from 'components/Links';
import { Layout } from 'Layouts/Layout';

export function PostsPage() {
  return (
    <Layout
      title="Flaky Tests and Engineering Impact"
      description="Part one of a post discussing zero flaky tests in a software engineering team."
    >
      <Container maxWidth="md">
        <Typography variant="h1" paragraph>
          Articles
        </Typography>
        <Box display="grid" gap={1}>
          <Typography paragraph>
            Flaky Tests Series -{' '}
            <InternalLink to="./zero-flaky-tests/engineering-impact">
              Flaky Tests and Engineering Impact
            </InternalLink>
          </Typography>
          <Typography paragraph>
            Flaky Tests Series -{' '}
            <InternalLink to="./zero-flaky-tests/strategies">
              Reliabile Testing Guidelines
            </InternalLink>
          </Typography>
          <Typography paragraph>
            Engineering -{' '}
            <InternalLink to="./engineering-2019-2023">
              My Engineering Experience from 2019-2023
            </InternalLink>
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
