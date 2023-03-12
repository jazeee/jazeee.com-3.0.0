import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
            borderRadius: 2,
            backgroundColor: '#feedca',
            marginLeft: 'auto',
            marginRight: 4,
            padding: 3,
            minWidth: '250px',
            width: '50%',
          }}
        >
          <Typography variant="h5">Full Stack Web Developer</Typography>
          <Typography variant="subtitle1">
            Primary Developer Skills (Sorted by skill level)
          </Typography>
          <ul>
            {webAppSkillNames.map((skillName) => (
              <li key={skillName}>
                <Typography variant="body2">{skillName}</Typography>
              </li>
            ))}
          </ul>
          <Typography variant="h6">
            <ExternalLink href="http://goo.gl/qWsPm">Resume</ExternalLink>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
