import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { LazyLoadedSkillsPlot } from './LoadablePlot';
import { BaseLink } from '../components/Links';
import { skills } from '../SkillsData/utils';

const { skillTypes } = skills;
export function SkillsPlotWithChooser() {
  const [skillType, setSkillType] = useState(skillTypes[0]);
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const selectItem = (newSkillType: string) => {
    setSkillType(newSkillType);
    setAnchorEl(null);
  };
  return (
    <Container>
      <Typography variant="h3" component="p">
        Skills
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={({ currentTarget }) => setAnchorEl(currentTarget)}
          variant="contained"
          color="primary"
          sx={{
            marginLeft: 1,
            marginBottom: 0.5,
          }}
        >
          {skillType}
          <ArrowDropDownIcon />
        </Button>
      </Typography>
      <Menu
        id="plot-chooser"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        {skillTypes.map((menuItemSkillType) => (
          <MenuItem key={menuItemSkillType} onClick={() => selectItem(menuItemSkillType)}>
            {menuItemSkillType}
          </MenuItem>
        ))}
        <MenuItem key="Show All Skills" component={BaseLink} to="/skills-plots">
          Show All Skills
        </MenuItem>
      </Menu>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12}>
          <LazyLoadedSkillsPlot titleIsVisible={false} skillType={skillType} />
        </Grid>
      </Grid>
    </Container>
  );
}
