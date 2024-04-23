import Typography from '@mui/material/Typography';

import { Image } from 'src/components/Image';
import { ExternalLink } from 'src/components/Links';
import { Spacer } from 'src/components/Spacers/Spacer';
import { PostLayout } from 'src/Posts/components/PostLayout';

import colorRepoContributions2022 from './assets/colorRepoContributions2022.png';
import covid19TestingScreenShot from './assets/covid19TestingScreenShot.png';
import storybookExampleScreenShot from './assets/storybookExampleScreenShot.png';
import { ContributionMetrics2019To2023 } from './ContributionMetrics2019-2023';

export function Engineering2019To2023Post() {
  return (
    <PostLayout
      layoutProps={{
        title: 'My Engineering Experience at Color Health 2019-2023',
        description: 'My engineering work, 2019-2023',
        seoProps: {
          image: colorRepoContributions2022,
        },
      }}
      breadcrumbName="Engineering 2019-2023"
      headlineProps={{
        title: 'My Engineering Experience at Color Health',
        date: '2023-03-14',
      }}
    >
      <Typography paragraph>
        I started working at <ExternalLink to="https://color.com">Color Health</ExternalLink> as a
        software engineer and front-end technical lead in 2019. When I started, there were about 30
        people in the engineering department.
      </Typography>
      <Typography variant="h2" paragraph>
        Background
      </Typography>
      <Typography paragraph>
        Color hired me to help build up the React front-end implementation, and to guide the team
        with React and TypeScript concepts, including function components, hooks, context, etc. This
        was about six months before the COVID-19 pandemic, and was a bit fortuitous, since those six
        months gave me and the team enough time to strengthen the React code patterns and concepts.
      </Typography>
      <Typography variant="h2" paragraph>
        COVID-19 and Engineering
      </Typography>
      <Typography paragraph>
        Color Health had the laboratory infrastructure and expertise to provide COVID-19 testing,
        but needed software to support it. They also needed this to be implemented within a very
        short time, on the order of 10 days!{' '}
        <ExternalLink to={covid19TestingScreenShot} openInNewTabIsVisible={false}>
          <Image
            src={covid19TestingScreenShot}
            alt="Screen shot of COVID-19 testing"
            width={160}
            sx={{
              float: 'left',
              marginRight: 2,
              marginY: 1,
            }}
          />
        </ExternalLink>
        Health care does not typically move this quickly, but Color had the engineering
        infrastructure to make this work - specifically, the ability to do frequent iterations and
        deploy daily.
        <Spacer height={1} />
        With this, we accomplished building out the user facing workflow and scheduling
        implementation, along with the intake admin application in that time. Business scaled, and
        we applied the same concepts towards COVID-19 vaccination scheduling and onsite platforms,
        and expanded from there.
      </Typography>
      <Typography variant="h2" paragraph>
        User Interfaces and Infrastructure Team
      </Typography>
      <Typography paragraph>
        As the work continued, the engineering team grew to over a 100 people. Color expanded into
        other areas of work, such as preventive care and behavioral health.{' '}
        <ExternalLink to={storybookExampleScreenShot} openInNewTabIsVisible={false}>
          <Image
            src={storybookExampleScreenShot}
            alt="Screenshot of Design Systems Storybook"
            width={160}
            sx={{
              float: 'right',
              marginLeft: 2,
              marginY: 1,
            }}
          />
        </ExternalLink>
        To support this, we spun up a <em>UX-infra</em> team to work towards a reusable library of
        front-end components and utilities. We also focused on addressing an growing code base,
        including planning and re-architecting the front-end infrastructure to support multiple
        products.
      </Typography>
      <Typography variant="h3" paragraph>
        Team Call Out
      </Typography>
      <Typography paragraph>
        I have to say, the UX infrastructure team of engineers and designers was an extremely solid
        team of highly effective people. I am proud and humbled to have had the opportunity to work
        with them. It&apos;s not a common scenario to find a well gelled and categorically strong
        team of people.
      </Typography>
      <Typography variant="h2" paragraph>
        Contribution Metrics
      </Typography>
      <ContributionMetrics2019To2023 totalCommitsAreVisible />
      <Spacer height={1} />
      <Typography variant="h2" paragraph>
        March 2023 - Layoffs
      </Typography>
      <Typography paragraph>
        Of course, all good things come to an end. In 2023, COVID-19 testing ended, and government
        funding dried up. Color scaled back the engineering team in a second round of layoffs. The
        UX-infra team was disbanded, including myself.
      </Typography>
    </PostLayout>
  );
}
