import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { GithubIcon } from '../../components/Icons/GithubIcon';
import { ExternalLink } from '../../components/Links';
import { ISoftwareProject } from '../types';

interface Props {
  project: ISoftwareProject;
}

export function GithubProject(props: Props) {
  const { project } = props;
  const { url, name, description, githubUrl } = project;
  return (
    <Grid
      container
      spacing={1}
      justifyContent="space-between"
      sx={{
        '& + &': {
          borderTop: `1px solid #e6e6e6`,
          marginTop: 1,
          paddingTop: 1,
        },
      }}
    >
      <Grid xs={12} md="auto">
        <Typography sx={{ fontWeight: 'bold' }}>
          {url ? <ExternalLink to={url}>{name}</ExternalLink> : name}
          {description && ':'}
        </Typography>
      </Grid>
      <Grid xs={12} md>
        <Typography>{description && `${description}`}</Typography>
      </Grid>
      <Grid xs={12} md="auto">
        <Typography
          sx={{
            textAlign: {
              xs: 'left',
              md: 'right',
            },
          }}
        >
          <ExternalLink to={githubUrl}>
            <GithubIcon
              sx={{
                fontSize: '1rem',
                color: 'grey',
                verticalAlign: 'middle',
                marginRight: 0.5,
              }}
            />
            Github
          </ExternalLink>
        </Typography>
      </Grid>
    </Grid>
  );
}
