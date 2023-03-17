import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Image } from 'components/Image';
import { ExternalLink } from 'components/Links';
import { Spacer } from 'components/Spacers/Spacer';
import { Layout } from 'Layouts/Layout';

import ColorContributionsObfuscated2019to2023 from './assets/ColorContributionsObfuscated2019-2023.png';
import colorRepoContributions2019 from './assets/colorRepoContributions2019.png';
import colorRepoContributions2020 from './assets/colorRepoContributions2020.png';
import colorRepoContributions2021 from './assets/colorRepoContributions2021.png';
import colorRepoContributions2022 from './assets/colorRepoContributions2022.png';
import colorRepoContributions2023 from './assets/colorRepoContributions2023.png';
import covid19TestingScreenShot from './assets/covid19TestingScreenShot.png';
import storybookExampleScreenShot from './assets/storybookExampleScreenShot.png';

const COLOR_REPO_CONTRIBUTIONS = [
  {
    year: 2019,
    url: 'https://github.com/jazeee?tab=overview&from=2019-12-01&to=2019-12-31',
    image: colorRepoContributions2019,
  },
  {
    year: 2020,
    url: 'https://github.com/jazeee?tab=overview&from=2020-12-01&to=2020-12-31',
    image: colorRepoContributions2020,
  },
  {
    year: 2020,
    url: 'https://github.com/jazeee?tab=overview&from=2021-12-01&to=2021-12-31',
    image: colorRepoContributions2021,
  },
  {
    year: 2020,
    url: 'https://github.com/jazeee?tab=overview&from=2022-12-01&to=2022-12-31',
    image: colorRepoContributions2022,
  },
  {
    year: 2020,
    url: 'https://github.com/jazeee?tab=overview&from=2023-01-01&to=2023-02-28',
    image: colorRepoContributions2023,
  },
];
export function Engineering2019To2023Post() {
  return (
    <Layout
      title="My Engineering Experience at Color Health 2019-2023"
      description="My engineering work, 2019-2023"
      seoProps={{
        image: colorRepoContributions2022,
      }}
    >
      <Container maxWidth="md">
        <Box
          margin={{
            xs: 0,
            sm: 4,
          }}
        >
          <Typography variant="h1" paragraph color="secondary">
            My Engineering Experience at Color Health
          </Typography>
          <Typography paragraph>
            I started working at <ExternalLink to="https://color.com">Color Health</ExternalLink> as
            a software engineer and front-end technical lead in 2019. When I started, there were
            about 30 people in the engineering department.
          </Typography>
          <Typography variant="h2" paragraph color="secondary">
            Background
          </Typography>
          <Typography paragraph>
            Color hired me to help build up the React front-end implementation, and to guide the
            team with React and TypeScript concepts, including function components, hooks, context,
            etc. This was about six months before the COVID-19 pandemic, and was a bit fortuitious,
            since those six months gave me and the team enough time to strengthen the React code
            patterns and concepts.
          </Typography>
          <Typography variant="h2" paragraph color="secondary">
            COVID-19 and Engineering
          </Typography>
          <Typography paragraph>
            Color Health had the laboratory infrastructure and expertise to provide COVID-19
            testing, but needed software to support it. They also needed this to be implemented
            within a very short time, on the order of 10 days!{' '}
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
            Health care doesn&apos;t typically move this quickly, but Color had the engineering
            infrastructure to make this work - specifically, the ability to do frequent iterations
            and deploy daily.
            <Spacer height={1} />
            With this, we accomplished building out the user facing workflow and scheduling
            implementation, along with the intake adming application in that time. Business scaled,
            and we applied the same concepts towards COVID-19 vaccination scheduling and onsite
            platforms, and expanded from there.
          </Typography>
          <Typography variant="h2" paragraph color="secondary">
            User Interfaces and Infrastructure Team
          </Typography>
          <Typography paragraph>
            As the work continued, the engineering team grew to over a 100 people. Color expanded
            into other areas of work, such as preventive care and behavioral health.{' '}
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
            To support this, we spun up a <em>UX-infra</em> team to work towards a reusable library
            of front-end components and utilities. We also focused on addressing an growing code
            base, including planning and rearchitecting the front-end infrastructure to support
            multiple products.
          </Typography>
          <Typography variant="h3" paragraph color="secondary">
            Team Call Out
          </Typography>
          <Typography paragraph>
            I have to say, the UX infrastructure team of engineers and designers was an extremely
            solid team of highly effective people. I am proud and humbled to have had the
            opportunity to work with them. It&apos;s not a common scenario to find a well gelled and
            categorically strong team of people.
          </Typography>
          <Typography variant="h2" paragraph color="secondary">
            Contribution Metrics
          </Typography>
          <Typography paragraph>
            During the 3.5 years of engineering work, I made over{' '}
            <ExternalLink to="https://github.com/jazeee?tab=overview&from=2019-10-01&to=2023-03-03">
              11,000 contributions
            </ExternalLink>{' '}
            to the Color repositories. This equates to about 12.5 contributions per work-day, on
            average, with about a 60% code-review to 40% code contribution split.
          </Typography>
          {COLOR_REPO_CONTRIBUTIONS.map((contribution) => {
            const { image, url, year } = contribution;
            return (
              <ExternalLink to={url} key={url} openInNewTabIsVisible={false}>
                <Image
                  src={image}
                  alt={`Color Repo contribution screenshot for ${year}`}
                  width="100%"
                />
                <Spacer height={1} />
              </ExternalLink>
            );
          })}
          <Typography paragraph>
            Over the 3.5 years, I merged the second highest number of commits at Color from
            inception to 2013, affecting over a million lines <sup>*</sup> of code. The highest was
            a person who had been at Color for 7+ years.
          </Typography>
          <Typography paragraph>
            <sup>*</sup> I added 436K and deleted 596K lines of code. Technically, some of this is
            related to moving and refactoring code. In addition, a chunk of this is related to third
            party packages. Direct contributions are probably on the order of 500K-700K lines of
            code.
          </Typography>
          <Image
            src={ColorContributionsObfuscated2019to2023}
            alt="Top six contributors to the Color repo 2023"
            width="100%"
          />
          <Spacer height={1} />
          <Typography variant="h2" paragraph color="secondary">
            March 2023 - Layoffs
          </Typography>
          <Typography paragraph>
            Of course, all good things come to an end. In 2023, COVID-19 testing ended, and
            government funding dried up. Color scaled back the engineering team in a second round of
            layoffs. The UX-infra team was disbanded, including myself.
          </Typography>
        </Box>
      </Container>
    </Layout>
  );
}
