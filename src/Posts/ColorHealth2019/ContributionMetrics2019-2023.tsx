import { Stack } from '@mui/material';
import Typography from '@mui/material/Typography';

import { Image } from 'src/components/Image';
import { ExternalLink } from 'src/components/Links';

import ColorContributionsObfuscated2019to2023 from './assets/ColorContributionsObfuscated2019-2023.png';
import colorRepoContributions2019 from './assets/colorRepoContributions2019.png';
import colorRepoContributions2020 from './assets/colorRepoContributions2020.png';
import colorRepoContributions2021 from './assets/colorRepoContributions2021.png';
import colorRepoContributions2022 from './assets/colorRepoContributions2022.png';
import colorRepoContributions2023 from './assets/colorRepoContributions2023.png';

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
    year: 2021,
    url: 'https://github.com/jazeee?tab=overview&from=2021-12-01&to=2021-12-31',
    image: colorRepoContributions2021,
  },
  {
    year: 2022,
    url: 'https://github.com/jazeee?tab=overview&from=2022-12-01&to=2022-12-31',
    image: colorRepoContributions2022,
    contributionIsHighlighted: true,
  },
  {
    year: 2023,
    url: 'https://github.com/jazeee?tab=overview&from=2023-01-01&to=2023-02-28',
    image: colorRepoContributions2023,
  },
];
interface Props {
  totalCommitsAreVisible: boolean;
}

export function ContributionMetrics2019To2023(props: Props) {
  const { totalCommitsAreVisible } = props;
  return (
    <Stack spacing={1}>
      <Typography>
        Over the course of about 3.5 years of software engineering at Color Health, I made over{' '}
        <ExternalLink to="https://github.com/jazeee?tab=overview&from=2019-10-01&to=2023-03-03">
          11,000 contributions
        </ExternalLink>{' '}
        to the Color repositories. This equates to about 12.5 contributions per work-day, on
        average, with about a 60% code-review to 40% code contribution split.
      </Typography>
      <Typography>
        During that time, I merged the second highest number of commits at Color, affecting over a
        million lines of code <sup>*</sup>.
      </Typography>
      <Typography>
        <sup>*</sup> <b>Details:</b> I added 436K and deleted 596K lines of code. Technically, some
        of this is related to moving and refactoring code. In addition, a chunk of this is related
        to third party packages. Direct contributions are probably on the order of 500K-700K lines
        of code.
      </Typography>
      {!totalCommitsAreVisible && <Typography variant="h2">Sample Contributions</Typography>}
      {COLOR_REPO_CONTRIBUTIONS.map((contribution) => {
        const { image, url, year, contributionIsHighlighted = false } = contribution;
        if (totalCommitsAreVisible || contributionIsHighlighted) {
          return (
            <ExternalLink to={url} key={url} openInNewTabIsVisible={false}>
              <Image
                src={image}
                alt={`Color Repo contribution screenshot for ${year}`}
                width="100%"
              />
            </ExternalLink>
          );
        }
        return null;
      })}
      {totalCommitsAreVisible && (
        <Image
          src={ColorContributionsObfuscated2019to2023}
          alt="Top six contributors to the Color repo 2023"
          width="100%"
        />
      )}
    </Stack>
  );
}
