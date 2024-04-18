import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { InternalLink } from 'components/Links';
import { Layout } from 'Layouts/Layout';

import { THIRD_PARTY_DEPENDENCIES_POST_TITLE } from './Engineering/ThirdPartyDependencies/Post';
import { BOUNDARY_SPACING_POST_TITLE } from './React/BoundaryMargins/Post';

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
              Reliable Testing Guidelines
            </InternalLink>
          </Typography>
          <Typography paragraph>
            React Series -{' '}
            <InternalLink to="./react/state-management">State Management</InternalLink>
          </Typography>
          <Typography paragraph>
            React Series -{' '}
            <InternalLink to="./react/boundary-spacing">{BOUNDARY_SPACING_POST_TITLE}</InternalLink>
          </Typography>
          <Typography paragraph>
            Engineering Series -{' '}
            <InternalLink to="./engineering/third-party-dependencies">
              {THIRD_PARTY_DEPENDENCIES_POST_TITLE}
            </InternalLink>
          </Typography>
          <Typography paragraph>
            Engineering Experiences -{' '}
            <InternalLink to="./engineering-2019-2023">
              My Engineering Contributions from 2019-2023
            </InternalLink>
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
