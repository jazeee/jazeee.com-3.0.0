import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { GithubIcon } from '../../components/Icons/GithubIcon';
import { ExternalLink } from '../../components/Links';
import { ISoftwareProject } from '../types';

interface Props {
  project: ISoftwareProject;
}

export function GithubProject(props: Props) {
  const { project } = props;
  const { url, name, description, githubFullName } = project;
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      gap={1}
      sx={{
        '& + &': {
          borderTop: `1px solid #e6e6e6`,
          marginTop: 1,
          paddingTop: 1,
        },
      }}
    >
      <Typography>
        <ExternalLink color="secondary" href={url}>
          {name}
        </ExternalLink>
      </Typography>
      <Typography
        sx={{
          flex: 1,
        }}
      >
        {description && `- ${description}`}
      </Typography>
      <Typography
        sx={{
          textAlign: 'right',
        }}
      >
        <ExternalLink color="secondary" href={`https://github.com/${githubFullName}`}>
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
    </Box>
  );
}
