import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { LazyLoadedSkillsPlot } from './LoadablePlot';
import { skills } from '../SkillsData/utils';

export function SkillsPlots() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h1" paragraph>
        Skill Plots
      </Typography>
      <Grid container spacing={2}>
        {skills.skillTypes.map((skillType) => (
          <Grid item xs={12} key={skillType}>
            <LazyLoadedSkillsPlot skillType={skillType} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
