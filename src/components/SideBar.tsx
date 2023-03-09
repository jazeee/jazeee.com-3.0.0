import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { URLS } from "../data/urls";
import { ForwardRefLink } from "./Link";
import { Location } from "@reach/router";
import { SECONDARY_COLOR } from "../utils/colors";

interface Props {
  closeSideBar: () => void;
}

export function SideBar(props: Props) {
  const { closeSideBar } = props;

  return (
    <Box
      width={250}
      role="presentation"
      onClick={closeSideBar}
      onKeyDown={closeSideBar}
    >
      <Location>
        {({ location }) => (
          <List>
            {URLS.map(({ name, path }) => {
              const isCurrentPath = location.pathname === path;
              return (
                <ListItem
                  sx={isCurrentPath ? {
                    color: SECONDARY_COLOR
                  }: undefined}
                  key={name}
                  component={ForwardRefLink}
                  button
                  to={path}
                >
                  <ListItemText primary={name} />
                </ListItem>
              );
            })}
          </List>
        )}
      </Location>
    </Box>
  );
};
