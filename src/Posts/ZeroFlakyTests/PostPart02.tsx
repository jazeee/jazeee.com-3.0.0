import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

import { ExternalLink, InternalLink } from 'components/Links';
import { Spacer } from 'components/Spacers/Spacer';
import { Code } from 'Posts/components/Code';
import { PostLayout } from 'Posts/components/PostLayout';

import { FlakyTestDefinitions } from './Definitions';

export function FlakyTestsPost02() {
  return (
    <PostLayout
      layoutProps={{
        title: 'Reliabile Testing Guidelines',
        description:
          'Part two - improving test reliability to achieve zero flaky tests in a software engineering team.',
      }}
      breadcrumbName="Flaky Tests - Part 2"
      headlineProps={{
        title: 'Reliabile Testing Guidelines',
        subtitle: 'Achieving the insurmountable.',
        date: '2023-03-19',
      }}
    >
      <Typography paragraph>
        In my <InternalLink to="../engineering-impact">previous post</InternalLink>, I go over the
        engineering costs of flaky tests.
      </Typography>
      <Typography paragraph>
        In this post, I will talk about strategies to achieve fully reliable tests, including across
        integration testing systems, such as Cypress, or Selenium.
      </Typography>
      <Typography variant="h2" paragraph>
        Summary
      </Typography>
      <Typography paragraph>
        In order to tackle flaky tests, we need to understand what can cause them. By understanding
        their causes, we can focus on increasing test reliability, and even eliminate test flake.
        This increases our confidence in tests and helps engineers focus on actual test failures. It
        also significantly impacts engineering cost.
      </Typography>
      <FlakyTestDefinitions />
      <Spacer height={1} />
      <Typography variant="h2" paragraph>
        Non-Deterministic Tests
      </Typography>
      <Typography paragraph>
        Tests that have random or variable inputs or dependencies are non-deterministic, and
        therefore, can be unpredictable, flaky, and hard to debug.
      </Typography>
      <Typography paragraph>
        Unfortunately, we tend to write tests in non-deterministic ways, on the assumption that
        &quot;our code will work for any value.&quot; For example, we tend to test with random
        values or date/time based values. We also tend to assume that web services will always work.
      </Typography>
      <Typography paragraph>
        Indeed, using random values or date/time dependent values in tests can uncover unexpected
        edge cases. Unfortunately, by doing this, we are pushing the onus of discovering edge cases
        onto our colleagues.
      </Typography>
      <Typography variant="h2" paragraph>
        Deterministic Test Guidelines
      </Typography>
      <Typography paragraph>
        In order to improve determinism in tests, I recommend the following:
      </Typography>
      <Typography variant="h3" paragraph>
        Monitor and Publicize Test Failures.
      </Typography>
      <Typography paragraph>
        When a test fails during CI or on the main branch of your code, it is a serious problem.
      </Typography>
      <Typography paragraph>
        Make this a high priority issue and notify all engineers via a visible communication channel
        such as a Slack channel. Consider creating a triage process and notify the code owner as
        quickly as possible. Consider disabling the test until resolved.
      </Typography>
      <Typography variant="h3" paragraph>
        Use a Date/Time Mock Test Utility.
      </Typography>
      <Typography>
        All software testing environments have support software for mocking functions and values.
        Examples:
      </Typography>
      <List
        sx={{
          listStyleType: 'decimal',
          listStylePosition: 'inside',
        }}
      >
        <ListItem sx={{ display: 'list-item' }}>
          Node <ExternalLink to="https://www.npmjs.com/package/mockdate">mockdate</ExternalLink>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Python{' '}
          <ExternalLink to="https://docs.python.org/3/library/unittest.mock-examples.html">
            unittest.mock
          </ExternalLink>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Cypress UI{' '}
          <ExternalLink to="https://docs.cypress.io/api/commands/clock#Function-names">
            <Code>
              cy.clock(new Date(&apos;2022-04-20T16:20:00-07:00&apos;), [&apos;Date&apos;]);
            </Code>
          </ExternalLink>
        </ListItem>
      </List>
      <Typography variant="h3" paragraph>
        Favor Fixed Values Over Random Values.
      </Typography>
      <Typography>Using fixed known values makes your test predictable and repeatable.</Typography>
      <List
        sx={{
          listStyleType: 'decimal',
          listStylePosition: 'inside',
        }}
      >
        <ListItem sx={{ display: 'list-item' }}>Random test values may not always work.</ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Random test values may make the test fragile.
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Random test values can make it hard to identify the source of the failure - the failing
          value may be obscure.
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          This is repeatable <Code>multiply(1.0, 2.0);</Code>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          This could overflow <Code>multiply(random1, random2);</Code>, if either random value
          happens to be large enough to overflow.
        </ListItem>
      </List>
      <Typography variant="h3" paragraph>
        Use a Fixed Random Seed.
      </Typography>
      <Typography paragraph>
        If you do choose to use random test values, set a fixed seed.
      </Typography>
      <Typography paragraph>
        {' '}
        Setting a fixed seed ensures that you can re-execute your test with a repeatable
        environment. This is important when your test fails and you need to debug the issue.
      </Typography>
      <Typography variant="h3" paragraph>
        Test Your Edge Cases.
      </Typography>
      <Typography>
        Identify and test specific edge cases. As needed, test your code for edge cases like:
      </Typography>
      <List
        sx={{
          listStyleType: 'decimal',
          listStylePosition: 'inside',
        }}
      >
        <ListItem sx={{ display: 'list-item' }}>Daylight saving transitions.</ListItem>
        <ListItem sx={{ display: 'list-item' }}>Month or year boundaries.</ListItem>
        <ListItem sx={{ display: 'list-item' }}>Leap day/second.</ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Example: <Code>getSecondsInYear(new Date());</Code> will return different values,
          depending on year.
        </ListItem>
      </List>
      <Typography variant="h3" paragraph>
        Manage Third Party APIs and Services.
      </Typography>
      <Typography>Reduce or eliminate dependencies on third party services.</Typography>
      <List
        sx={{
          listStyleType: 'decimal',
          listStylePosition: 'inside',
        }}
      >
        <ListItem sx={{ display: 'list-item' }}>
          If your test relies on an external service, your test will flake.
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>Mock these external services.</ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Yes, even things like Auth0 will fail with 503 or 429 errors.
        </ListItem>
      </List>
      <Typography variant="h3" paragraph>
        Cache Package Dependencies.
      </Typography>
      <Typography>Reduce or eliminate dependencies on package services.</Typography>
      <List
        sx={{
          listStyleType: 'decimal',
          listStylePosition: 'inside',
        }}
      >
        <ListItem sx={{ display: 'list-item' }}>
          <Code>npm</Code>, <Code>pip</Code>, <Code>Github</Code> are not guaranteed to always work.
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          In addition, they may rate limit the CI servers, causing unpredictable flake.
        </ListItem>
      </List>
      <Typography variant="h3" paragraph>
        Order Your Test Data.
      </Typography>
      <Typography>Write tests to handle unordered data. Examples:</Typography>
      <List
        sx={{
          listStyleType: 'decimal',
          listStylePosition: 'inside',
        }}
      >
        <ListItem sx={{ display: 'list-item' }}>
          For example, the SQL spec does not guarantee ordering of query results without an{' '}
          <Code>ORDER BY</Code> clause.{' '}
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Similarly, some data structures, such as Java <Code>HashMap</Code> do not guarantee
          iteration order.{' '}
        </ListItem>
      </List>
      <Typography variant="h3" paragraph>
        Plan for Unpredictable Latency (Integration Testing).
      </Typography>
      <Typography>
        Tests that span parts the software stack introduce unpredictable latency. While the common
        mantra is to assume that these kinds of tests will be flaky, this can be avoided.
      </Typography>
      <List
        sx={{
          listStyleType: 'decimal',
          listStylePosition: 'inside',
        }}
      >
        <ListItem sx={{ display: 'list-item' }}>
          Integration test systems like{' '}
          <ExternalLink to="https://www.cypress.io/">Cypress</ExternalLink> and{' '}
          <ExternalLink to="https://playwright.dev/">Playwright</ExternalLink> are designed to
          reduce test flake.
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          When writing UI integration tests, do not add arbitrary time based waits, like{' '}
          <Code>cy.wait(200)</Code>. This assumes that something will complete within 200
          milliseconds, despite being unpredictable.
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Often, the UI is waiting for an API response before updating. In order to make your test
          deterministic, wait for that API response to resolve, then verify that the UI matches your
          expectations.
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          In Cypress, this means <Code>cy.intercept(apiPath).as(&apos;api-request&apos;)</Code>,
          then wait for that API to resolve <Code>cy.wait(&apos;@api-request&apos;);</Code>.
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          Avoid flickering, janky, or non-determinstic UI. Testing frameworks cannot be resilient to
          flake if your code repeatedly removes and adds DOM elements.
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          In React, be aware of <Code>useEffect</Code>, which can cause unpredictable behavior.
        </ListItem>
      </List>
      <Typography variant="h2" paragraph>
        Case Study
      </Typography>
      <Typography paragraph>
        An engineer wrote a function to generate the time from morning to night. This function
        worked as expected between midnight in UTC and 7 AM PST (or 8AM PDT). During this time
        period, the function returned values like <em>-4:00 AM</em> instead of <em>12:00 AM</em>.
      </Typography>
      <Typography paragraph>
        This engineer wrote tests using the current date and the tests passed during their work day,
        but failed at 5 PM PST, every day. This engineer never saw the error, since they lived on
        the US east coast, and the failure occurred at 8 PM for them. Unfortunately, these test
        failures blocked all CI tests for the engineers in the US west coast, and also affected all
        users after 5 PM.
      </Typography>
      <Typography paragraph>
        One could argue that it was great that the tests identified the bug. This comes at the
        expense of blocking the entire team, and is therefore quite expensive. Instead, the tests
        should be made to be determinstic, by mocking the date/time for the edge cases. In doing so,
        the 5 PM PST scenario is tested continually, not just after 5 PM.
      </Typography>
      <Typography variant="h2" paragraph>
        Conclusion
      </Typography>
      <Typography paragraph>
        By employing these guidelines, we were able to successfully clean up all flaky tests.
        Indeed, by identifying and resolving the easiest fixes, we exposed hidden bugs and more
        complex non-deterministic test failures. We were then able to identify their root causes,
        and clean those up.
      </Typography>
      <Typography paragraph>
        As a measure of this success, I configured the continuous integration tests (including
        Cypress tests) to run every hour, for every day. These tests ran successfully throughout the
        December holidays without fail - until 2023-01-01 at midnight.
      </Typography>
      <Typography paragraph>
        The one test failure that occurred was one that I wrote to verify that the footer contained
        2022. I failed to mock the date! It was a once a year failure, and a simple fix. No other
        tests failed during those two weeks. This means that no engineers were blocked from
        emergency deployments or other work during the holidays.
      </Typography>
      <Typography paragraph>
        Zero flaky tests are certainly achievable, including cross stack integration tests. The
        investment is relatively minimal, and it pays off very quickly.
      </Typography>
    </PostLayout>
  );
}
