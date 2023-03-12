import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import { LazyLoadedSkillsPlot } from './LoadablePlot';
import { skills } from '../SkillsData/utils';

export function SkillsPlots() {
  return (
    <Container>
      <Typography variant="h1" paragraph>
        Skill Plots
      </Typography>
      <Grid container spacing={2}>
        {skills.skillTypes.map((skillType) => (
          <Grid item xs={12} lg={6} key={skillType}>
            <LazyLoadedSkillsPlot skillType={skillType} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
