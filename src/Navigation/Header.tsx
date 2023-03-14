import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

import { DarkModeIcon } from 'components/Icons/DarkModeIcon';
import { LightModeIcon } from 'components/Icons/LightModeIcon';
import { usePaletteModeContext } from 'components/Theme/paletteModeContext';

import { HideOnScroll } from './HideOnScroll';
import { SideBar } from './SideBar';
import { GithubIcon } from '../components/Icons/GithubIcon';
import { LinkedInIcon } from '../components/Icons/LinkedInIcon';
import { InternalLink, ExternalLink } from '../components/Links';

const DARK_MODE_COLOR = '#aaa';
const LIGHT_MODE_COLOR = '#cc0';

interface Props {
  siteTitle: string;
}

export function Header(props: Props) {
  const { siteTitle } = props;
  const { paletteModeIsDark, togglePaletteMode } = usePaletteModeContext();
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const PaletteModeIcon = paletteModeIsDark ? DarkModeIcon : LightModeIcon;
  return (
    <>
      <Drawer
        anchor="left"
        open={sideBarIsOpen}
        onClose={() => setSideBarIsOpen(false)}
        PaperProps={{
          sx: {
            justifyContent: 'space-between',
          },
        }}
      >
        <SideBar
          closeSideBar={() => {
            setSideBarIsOpen(false);
          }}
        />
        <Button
          aria-label="Toggle Palette Mode"
          aria-controls="toggle-palette-mode"
          onClick={() => {
            togglePaletteMode();
            setSideBarIsOpen(false);
          }}
          variant="contained"
          sx={{
            gap: 0.5,
            color: paletteModeIsDark ? DARK_MODE_COLOR : LIGHT_MODE_COLOR,
            borderRadius: 0,
          }}
        >
          <PaletteModeIcon />
          Change to {paletteModeIsDark ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Drawer>
      <HideOnScroll>
        <AppBar
          sx={{
            backgroundImage: 'unset',
          }}
        >
          <Toolbar>
            <Tooltip title="Open Navigation menu" placement="bottom-end">
              <IconButton
                edge="start"
                sx={{ marginRight: 2 }}
                color="inherit"
                aria-label="Menu"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={() => setSideBarIsOpen(true)}
              >
                <MenuIcon />
              </IconButton>
            </Tooltip>
            <InternalLink to="/" color="inherit" underline="none">
              {siteTitle}
            </InternalLink>
            <Box flexGrow={1} />
            <Box display="flex" gap={1} alignItems="center">
              <Tooltip title="Toggle Palette Mode" placement="bottom-start">
                <IconButton
                  sx={{ color: paletteModeIsDark ? DARK_MODE_COLOR : LIGHT_MODE_COLOR, padding: 0 }}
                  aria-label="Toggle Palette Mode"
                  aria-controls="toggle-palette-mode"
                  onClick={() => togglePaletteMode()}
                >
                  <PaletteModeIcon />
                </IconButton>
              </Tooltip>
              <ExternalLink
                color="secondary"
                to="http://www.linkedin.com/in/jazeee"
                openInNewTabIsVisible={false}
              >
                <LinkedInIcon sx={{ verticalAlign: 'middle' }} />
              </ExternalLink>
              <ExternalLink
                color="secondary"
                to="https://github.com/jazeee"
                openInNewTabIsVisible={false}
              >
                <GithubIcon sx={{ verticalAlign: 'middle' }} />
              </ExternalLink>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
