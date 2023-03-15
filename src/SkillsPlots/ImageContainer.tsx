import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Image } from 'components/Image';
import { InternalLink } from 'components/Links';
import { usePaletteModeContext } from 'components/Theme/paletteModeContext';

const skillsPlotImages = {
  dark: '/static/images/skillPlotsDarkMode-2023.png',
  light: '/static/images/skillPlotsLightMode-2023.png',
};

export function SkillsPlotsImageContainer() {
  const { paletteMode } = usePaletteModeContext();
  return (
    <Container>
      <Typography variant="h1" component="p" paragraph>
        Skills
      </Typography>
      <InternalLink to="/skills-plots">
        <Image src={skillsPlotImages[paletteMode]} alt="Skill Plots" width="100%" />
        Go to Skills
      </InternalLink>
    </Container>
  );
}
