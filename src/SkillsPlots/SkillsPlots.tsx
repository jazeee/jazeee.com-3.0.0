import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { LazyLoadedSkillsPlot } from './LoadablePlot';
import { skills } from '../SkillsData/utils';

export function SkillsPlots() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" paragraph>
        Skill Plots
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap={{
          xs: 2,
          md: 4,
        }}
      >
        {skills.skillTypes.map((skillType) => (
          <Box key={skillType}>
            <LazyLoadedSkillsPlot skillType={skillType} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
