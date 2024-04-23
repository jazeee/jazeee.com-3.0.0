import { Stack } from '@mui/material';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Image } from 'src/components/Image';
import { ExternalLink, InternalLink } from 'src/components/Links';

import clipboardHealthRepoContributions2023 from './assets/clipboardHealthRepoContributions2023.png';
import { ContributionMetrics2019To2023 } from './ContributionMetrics2019-2023';

export function ContributionMetrics2019AndOnContainer() {
  return (
    <Container>
      <Stack spacing={1}>
        <Typography variant="h1" component="p">
          Engineering Metrics 2019-2024
        </Typography>
        <Typography>
          From 2023 to 2024 (about a year), I worked at Clipboard Health, I made about{' '}
          <ExternalLink to="https://github.com/jazeee?tab=overview&from=2023-04-10&to=2024-04-04">
            3,300 contributions
          </ExternalLink>{' '}
          to the Clipboard Health repositories, and did around 10% of all code reviews across the
          engineering organization.
        </Typography>
        <ExternalLink
          to="https://github.com/jazeee?tab=overview&from=2023-04-10&to=2024-04-04"
          openInNewTabIsVisible={false}
        >
          <Image
            src={clipboardHealthRepoContributions2023}
            alt="Clipboard Health Repo contribution screenshot for 2023-2024"
            width="100%"
          />
        </ExternalLink>

        <ContributionMetrics2019To2023 totalCommitsAreVisible={false} />
        <InternalLink to="/posts/engineering-2019-2023">Color Engineering Blog Post</InternalLink>
      </Stack>
    </Container>
  );
}
