import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import { Image } from 'src/components/Image';
import { InternalLink } from 'src/components/Links';
import { usePaletteModeContext } from 'src/components/Theme/paletteModeContext';

const desktopSkillsPlotImages = {
  dark: '/static/images/skillPlotsDarkMode-2024.png',
  light: '/static/images/skillPlotsLightMode-2024.png',
};

const mobileSkillsPlotImages = {
  dark: '/static/images/skillPlotsDarkModeMobile-2024.png',
  light: '/static/images/skillPlotsLightModeMobile-2024.png',
};

export function SkillsPlotsImageContainer() {
  const { paletteMode } = usePaletteModeContext();
  const theme = useTheme();
  const screenIsWide = useMediaQuery(theme.breakpoints.up('sm'));
  const skillsPlotImages = screenIsWide ? desktopSkillsPlotImages : mobileSkillsPlotImages;
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
