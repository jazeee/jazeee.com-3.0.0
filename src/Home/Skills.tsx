import Box from '@mui/material/Box';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useMemo } from 'react';

import codeBackgroundImage from './images/codeBackground.png';
import { ExternalLink } from '../components/Links';
import { skills } from '../SkillsData/utils';

const webAppSkillNames = skills
  .getDomainSkills('Software Engineering')
  .filter((__skill, index) => index < 12)
  .map((skill) => skill.name);

export function Skills() {
  const theme = useTheme();
  const skillsTheme = useMemo(() => {
    return createTheme({
      ...theme,
      typography: {
        allVariants: {
          color: '#222',
        },
        h1: {
          fontSize: '2.25rem',
        },
        h2: {
          fontSize: '1.75rem',
        },
      },
      palette: {
        ...theme.palette,
        secondary: {
          main: '#248eff',
        },
      },
    });
  }, [theme]);
  return (
    <ThemeProvider theme={skillsTheme}>
      <Box
        sx={{
          backgroundImage: `url('${codeBackgroundImage}')`,
          backgroundColor: 'black',
          backgroundRepeat: 'repeat-y',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '100%',
            padding: 3,
          }}
        >
          <Box
            sx={{
              border: '2px solid #666',
              borderRadius: 2,
              backgroundColor: '#feedca',
              marginLeft: 'auto',
              marginRight: 4,
              padding: 3,
              minWidth: '250px',
              width: '50%',
            }}
          >
            <Typography variant="h2" component="h1" paragraph>
              React/Full Stack Software Engineer
            </Typography>
            <Typography>Primary Developer Skills (Sorted by skill level):</Typography>
            <Box marginLeft={2}>
              {webAppSkillNames.map((skillName) => (
                <Typography key={skillName}>{skillName}</Typography>
              ))}
            </Box>
            <Typography variant="h6">
              <ExternalLink href="http://goo.gl/qWsPm">Resume</ExternalLink>
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
