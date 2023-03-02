import PropTypes from "prop-types";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import { makeStyles } from "@mui/material/styles";
import { Link } from "./link";
import { SideBar } from "./side-bar";
import { TargetBlankLink } from "./target-blank-link";
import { GithubIcon } from "./icons/github-icon";
import { LinkedInIcon } from "./icons/linked-in-icon";

import { HideOnScroll } from "./hide-on-scroll";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  social: {
    marginLeft: theme.spacing(1),
  },
}));

export const Header = props => {
  const [isSideBarOpen, setIsSideBarOpen] = React.useState(false);
  const { siteTitle } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
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
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={() => setIsSideBarOpen(true)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" color="inherit">
                {siteTitle}
              </Link>
            </Typography>
            <Typography variant="h6" className={classes.social}>
              <TargetBlankLink
                color="secondary"
                href="http://www.linkedin.com/in/jazeee"
              >
                <LinkedInIcon />
              </TargetBlankLink>
            </Typography>
            <Typography variant="h6" className={classes.social}>
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
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
