import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

import { HideOnScroll } from './HideOnScroll';
import { GithubIcon } from './Icons/GithubIcon';
import { LinkedInIcon } from './Icons/LinkedInIcon';
import { InternalLink, ExternalLink } from './Links';
import { SideBar } from './SideBar';

interface Props {
  siteTitle: string;
}

export function Header(props: Props) {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const { siteTitle } = props;
  return (
    <Box flexGrow={1}>
      <Drawer anchor="left" open={sideBarIsOpen} onClose={() => setSideBarIsOpen(false)}>
        <SideBar
          closeSideBar={() => {
            setSideBarIsOpen(false);
          }}
        />
      </Drawer>
      <HideOnScroll>
        <AppBar>
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
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <InternalLink to="/">{siteTitle}</InternalLink>
            </Typography>
            <Typography variant="h6" sx={{ marginLeft: 1 }}>
              <ExternalLink color="secondary" href="http://www.linkedin.com/in/jazeee">
                <LinkedInIcon />
              </ExternalLink>
            </Typography>
            <Typography variant="h6" sx={{ marginLeft: 1 }}>
              <ExternalLink color="secondary" href="https://github.com/jazeee">
                <GithubIcon />
              </ExternalLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </Box>
  );
}
