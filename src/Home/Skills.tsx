import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Spacer } from 'components/Spacers/Spacer';
import { SIDE_BAR_URLS } from 'Navigation/siteBarItems';

import codeBackgroundImage from './images/codeBackground.png';
import { ExternalLink } from '../components/Links';
import { skills } from '../SkillsData/utils';

const webAppSkillNames = skills
  .getDomainSkills('Software Engineering')
  .filter((__skill, index) => index < 12)
  .map((skill) => skill.name);

export function Skills() {
  return (
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
            borderRadius: 4,
            backgroundColor: (theme) => theme.palette.background.default,
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
          <Spacer height={1} />
          <Typography variant="body1" display="flex" gap={1}>
            {SIDE_BAR_URLS.map((item) => {
              const { name, path } = item;
              return (
                <ExternalLink key={path} href={path}>
                  {name}
                </ExternalLink>
              );
            })}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
