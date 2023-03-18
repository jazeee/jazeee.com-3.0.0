import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { InternalLink } from 'components/Links';
import { Spacer } from 'components/Spacers/Spacer';

import { ContributionMetrics2019To2023 } from './ContributionMetrics2019-2023';

export function ContributionMetrics2019To2023Container() {
  return (
    <Container>
      <Typography variant="h1" component="p" paragraph>
        Engineering Metrics 2019-2023
      </Typography>
      <ContributionMetrics2019To2023 totalCommitsAreVisible={false} />
      <Spacer height={1} />
      <InternalLink to="/posts/engineering-2019-2023">See Details</InternalLink>
    </Container>
  );
}
