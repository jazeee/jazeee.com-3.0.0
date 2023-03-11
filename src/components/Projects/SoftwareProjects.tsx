import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { GithubProject } from './GithubProject';
import { SOFTWARE_PROJECTS } from '../../data/software-projects-data';
import { BaseLink } from '../Links/Link';

export function SoftwareProjects() {
  return (
    <Container>
      <h1>Software Projects</h1>
      {SOFTWARE_PROJECTS.map((project) => {
        return <GithubProject key={project.name} project={project} />;
      })}
      <Box sx={{ paddingY: 2 }}>
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
