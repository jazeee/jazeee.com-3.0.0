import Box from '@mui/material/Box';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { ExternalLink, InternalLink } from 'components/Links';
import { Spacer } from 'components/Spacers/Spacer';
import { Layout } from 'Layouts/Layout';

import { FlakyTestDefinitions } from './Definitions';

export function FlakyTestsPost01() {
  return (
    <Layout
      title="Flaky Tests and Engineering Impact"
      description="Part one of a post discussing zero flaky tests in a software engineering team."
    >
      <Container maxWidth="md">
        <Breadcrumbs aria-label="breadcrumb" separator=">">
          <InternalLink underline="hover" to="../../">
            Articles
          </InternalLink>
          <Typography color="text.primary">Flaky Tests - Part 1</Typography>
        </Breadcrumbs>
        <Box
          margin={{
            xs: 0,
            sm: 4,
          }}
        >
          <Typography variant="h1" color="secondary">
            Flaky Tests and Engineering Impact
          </Typography>
          <Typography variant="subtitle1" component="p">
            Achieving the insurmountable.
          </Typography>
          <Typography variant="subtitle1" component="p">
            2023-03-17
          </Typography>
          <Divider />
          <Spacer height={1} />
          <Typography paragraph>
            As a software engineer, we all experience tests that sometimes fail. What do we do?
            Shrug and rerun. Engineers tend to consider test flake as an inevitable - a constant
            background problem that one simply endures.
          </Typography>
          <Typography variant="h2" paragraph color="secondary">
            Summary
          </Typography>
          <Typography paragraph>
            As part of engineering software over the last few years, we identified flaky tests as a
            blocker to achieving a successful merge queue. Some of this can be addressed by
            analyzing the code tree and only running tests that are dependent on the merge&apos;s
            changes. This is fairly challenging, however, and the analyses don&apos;t identify a lot
            of dependencies. Full stack test systems, such as Cypress or Selenium, are particularly
            challenging.
          </Typography>
          <Typography paragraph>
            We identified a fundamental need to address flaky tests.
          </Typography>
          <FlakyTestDefinitions />
          <Spacer height={1} />
          <Typography variant="h2" paragraph color="secondary">
            Why Test Flake Matters
          </Typography>
          <Typography paragraph>
            As software engineers make changes or add new code, they also execute tests to ensure
            that their contributions work as expected. Some changes are localized, but others can
            have a large breadth of impact.
          </Typography>
          <Typography paragraph>
            If there are existing or new flaky tests, engineers may encounter them as part of their
            work. This may be random and unpredictable, or it may be dependent on the time of day,
            or even dependent on external systems. These flaky tests are often quite frustrating,
            particularly if they are intermittent.
          </Typography>
          <Typography variant="h3" paragraph color="secondary">
            Costs and Engineering Churn
          </Typography>
          <Typography paragraph>
            In addition, flaky tests are <em>expensive</em>, since engineers then spend valuable
            time to debug and resolve the issues. Often, engineers assume that they just broke
            something, and have to delve into their code in order to determine the root cause.
          </Typography>
          <Typography paragraph>
            In continuous integration processes, the tests are run on CI systems like{' '}
            <ExternalLink to="https://circleci.com/">CircleCI</ExternalLink> or as a{' '}
            <ExternalLink to="https://github.com/features/actions">Github Action</ExternalLink>.
            These processes take several minutes to execute, and engineers don&apos;t see the
            intermittent failure until they check their notifications. This delay means that
            engineers have to context switch back to their original work and then debug the issue.
            (Often, they simply rerun CI, in the hopes that the failed test is unrelated to their
            changes, which adds to CI execution costs.)
          </Typography>
          <Typography variant="h3" paragraph color="secondary">
            Reliability
          </Typography>
          <Typography paragraph>
            In addition, even if they are <em>intermittent</em>, some flaky tests may be identifying
            real bugs in code. Since engineers tend to treat flaky tests as background noise, they
            become inured to these hidden bugs. Real bugs in code affect product quality, and
            therefore we should address them.
          </Typography>
          <Typography variant="h2" paragraph color="secondary">
            Strategies for Achieving Reliable Tests
          </Typography>
          <Typography paragraph>
            In the <InternalLink to="../strategies">next post</InternalLink>, I will cover some
            strategies for achieving zero flake in continuous integration.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
