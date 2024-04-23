import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Spacer } from 'src/components/Spacers/Spacer';

import { SOFTWARE_PROJECTS } from './data';
import { BaseLink } from '../../components/Links';
import { GithubProject } from '../components/GithubProject';

export function SoftwareProjects() {
  return (
    <Container>
      <Typography variant="h1" paragraph>
        Software Projects
      </Typography>
      {SOFTWARE_PROJECTS.map((project) => {
        return <GithubProject key={project.name} project={project} />;
      })}
      <Spacer height={2} />
      <Box>
        <Button
          variant="contained"
          component={BaseLink}
          to="/software-projects/all-github-projects"
        >
          All Github Projects
        </Button>
      </Box>
    </Container>
  );
}
