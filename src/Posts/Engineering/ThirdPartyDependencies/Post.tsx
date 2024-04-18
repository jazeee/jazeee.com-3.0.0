import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

import { ExternalLink } from 'components/Links';
import { Ol, Li, Ul } from 'components/Lists';
import { Code } from 'Posts/components/Code';
import { PostLayout } from 'Posts/components/PostLayout';

import { WarningLine } from '../../components/WarningLine';

export const THIRD_PARTY_DEPENDENCIES_POST_TITLE = 'Third Party Dependencies';

export function ThirdPartyDependenciesPost() {
  return (
    <PostLayout
      layoutProps={{
        title: THIRD_PARTY_DEPENDENCIES_POST_TITLE,
        description: 'Evaluating and Adding Third Party Dependencies.',
      }}
      breadcrumbName={THIRD_PARTY_DEPENDENCIES_POST_TITLE}
      headlineProps={{
        title: THIRD_PARTY_DEPENDENCIES_POST_TITLE,
        date: '2024-04-17',
      }}
    >
      <Stack spacing={2}>
        <Typography variant="h2">Summary</Typography>
        <Typography>
          We rely on third party code - code that we depend on, but do not author. There are
          benefits, risks, and considerations to keep in mind.
        </Typography>
        <Typography variant="h2">Considerations</Typography>
        <Typography variant="h3">Benefits of Using Third Party Code</Typography>
        <Ul>
          <Li>We don&apos;t reinvent the wheel.</Li>
          <Li>We can rely on existing functionality.</Li>
          <Li>We can rely on heavily used and tested code. (See comments below)</Li>
          <Li>We can focus on business needs.</Li>
          <Li>
            When hiring and onboarding new engineers, they may already have experience and knowledge
            with the third party dependency.
          </Li>
        </Ul>
        <Typography variant="h3">Risks and Considerations of Using Third Party Code</Typography>
        <Ul>
          <Li>The code may not be well tested.</Li>
          <Li>The code may not be commonly used.</Li>
          <Li>
            The code may have an incompatible license to commercial usage.
            <Ul>
              <Li>Apache, MIT and similar licenses are safe.</Li>
              <Li>GPL licenses are not commercially safe.</Li>
            </Ul>
          </Li>
          <Li>
            Occasionally, third party code can include vulnerabilities or depend on packages that
            are vulnerable.
          </Li>
          <Li>
            The UI has extra considerations for payload size.
            <Ul>
              <Li>
                From a network perspective, the worst case is 3G or slow 4G mobile.
                <Ul>
                  <Li>This is about 300 KBytes/sec or so.</Li>
                  <Li>For people who pay per MB, this can add up, on the order of $0.10 per MB.</Li>
                  <Li>
                    We don&apos;t want to encumber visitors with extra cost to use our apps, etc.
                  </Li>
                </Ul>
              </Li>
              <Li>
                From a network perspective, the worst case is 3G or slow 4G mobile.
                <Ul>
                  <Li>Evaluate whether the package works with code splitting.</Li>
                  <Li>
                    <Code>momentjs</Code> for example, is not splittable.
                  </Li>
                </Ul>
              </Li>
            </Ul>
          </Li>
        </Ul>
        <Typography variant="h2">Evaluation Guidelines</Typography>
        <Typography>When adding or updating third party code, review the following.</Typography>
        <Ol>
          <Li>Review for license that is compatible with commercial usage.</Li>
          <Li>Review test coverage.</Li>
          <Li>Review popularity and public usage.</Li>
          <Li>Review maintenance dates. Is the code updated routinely.</Li>
          <Li>Consider scanning the code and its dependencies.</Li>
          <Li>Document this information in your PR and commit message.</Li>
        </Ol>
        <Typography>
          Look for download statistics online. For example, look at weekly downloads on{' '}
          <ExternalLink to="https://www.npmjs.com">NPM</ExternalLink>.
        </Typography>
        <Typography variant="h3">Evaluation Metrics</Typography>
        <Stack spacing={1}>
          <Typography variant="h4">
            <b>High Usage:</b>
          </Typography>
          <Ul>
            <Li>
              Weekly Downloads <Code>&gt;= 1,000,000 per week.</Code>
            </Li>
            <Li>
              High download rate is a strong indication that the dependency is high quality and well
              maintained.
            </Li>
            <Li>This level should be safe for adoption.</Li>
          </Ul>
          <Typography variant="h4">
            <b>Medium Usage:</b>
          </Typography>
          <Ul>
            <Li>
              Weekly Downloads below the high usage threshold but{' '}
              <Code>&gt;= 100,000 per week.</Code>
            </Li>
            <Li>Use your best judgment about whether it needs more detailed review.</Li>
            <Li>Look at the source code and the level of quality and maintenance.</Li>
          </Ul>
          <Typography variant="h4">
            <WarningLine>
              <b>Low Usage:</b>
            </WarningLine>
          </Typography>
          <Ul>
            <Li>Weekly Downloads below the above thresholds.</Li>
            <Li>Use your best judgment about whether you actually should use it.</Li>
            <Li>
              Low usage may introduce risks or simply not be worth the added dependency maintenance.
            </Li>
            <Li>
              If you have to use the package, review the code for quality, risks, and other
              considerations.
              <Ul>
                <Li>Do this before the initial usage, and also with every upgrade.</Li>
                <Li>Review the third party code as if you were reviewing internal code.</Li>
                <Li>
                  Document your review in the PR or linked reference.
                  <Ul>
                    <Li>Note the changes, and related risks and considerations.</Li>
                    <Li>Make note and review the test coverage.</Li>
                  </Ul>
                </Li>
                <Li>
                  Consider providing feedback or changes to the original authors as necessary.
                </Li>
                <Li>
                  Consider forking the project into your local codebase and break the third party
                  dependency.
                </Li>
              </Ul>
            </Li>
          </Ul>
        </Stack>
      </Stack>
    </PostLayout>
  );
}
