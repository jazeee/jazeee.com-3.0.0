import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { PaletteModeIcon } from 'components/Icons/PaletteModeIcon';
import { usePaletteModeContext } from 'components/Theme/paletteModeContext';

import { HideOnScroll } from './HideOnScroll';
import { SideBar } from './SideBar';
import { GithubIcon } from '../components/Icons/GithubIcon';
import { LinkedInIcon } from '../components/Icons/LinkedInIcon';
import { InternalLink, ExternalLink } from '../components/Links';

interface Props {
  siteTitle: string;
}

export function Header(props: Props) {
  const { siteTitle } = props;
  const { paletteMode, setPaletteMode } = usePaletteModeContext();
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
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
            setPaletteMode((mode) => (mode === 'dark' ? 'light' : 'dark'));
            setSideBarIsOpen(false);
          }}
          variant="contained"
          sx={{
            gap: 0.5,
            color: paletteMode === 'dark' ? '#aaa' : '#cc0',
            borderRadius: 0,
          }}
        >
          <PaletteModeIcon />
          Change to {paletteMode === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>
      </Drawer>
      <HideOnScroll>
        <AppBar
          sx={{
            backgroundImage: 'unset',
          }}
        >
          <Toolbar>
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
            <InternalLink to="/" color="inherit" underline="none" sx={{ flexGrow: 1 }}>
              {siteTitle}
            </InternalLink>
            <Typography sx={{ marginLeft: 1 }}>
              <ExternalLink color="secondary" href="http://www.linkedin.com/in/jazeee">
                <LinkedInIcon />
              </ExternalLink>
            </Typography>
            <Typography sx={{ marginLeft: 1 }}>
              <ExternalLink color="secondary" href="https://github.com/jazeee">
                <GithubIcon />
              </ExternalLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
