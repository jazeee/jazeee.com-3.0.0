import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { Link } from "./Link";
import { SideBar } from "./SideBar";
import { TargetBlankLink } from "./target-blank-link";
import { GithubIcon } from "./icons/github-icon";
import { LinkedInIcon } from "./icons/linked-in-icon";

import { HideOnScroll } from "./hide-on-scroll";

export const Header = props => {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
  const { siteTitle } = props;
  return (
    <Box flexGrow={1}>
      <Drawer
        anchor="left"
        open={isSideBarOpen}
        onClose={() => setIsSideBarOpen(false)}
      >
        <SideBar closeSideBar={() => setIsSideBarOpen(false)} />
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
              onClick={() => setIsSideBarOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              <Link to="/" color="inherit">
                {siteTitle}
              </Link>
            </Typography>
            <Typography variant="h6" sx={{ marginLeft: 1 }}>
              <TargetBlankLink
                color="secondary"
                href="http://www.linkedin.com/in/jazeee"
              >
                <LinkedInIcon />
              </TargetBlankLink>
            </Typography>
            <Typography variant="h6" sx={{ marginLeft: 1 }}>
              <TargetBlankLink
                color="secondary"
                href="https://github.com/jazeee"
              >
                <GithubIcon />
              </TargetBlankLink>
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </Box>
  );
};
