import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { useLocation } from 'react-router-dom';

import { SIDEBAR_URLS } from './urls';
import { BaseLink } from '../components/Links';

interface Props {
  closeSideBar: () => void;
}

export function SideBar(props: Props) {
  const { closeSideBar } = props;
  const location = useLocation();

  return (
    <Box width={250} role="presentation" onClick={closeSideBar} onKeyDown={closeSideBar}>
      <List component="nav">
        {SIDEBAR_URLS.map(({ name, path }) => {
          const pathIsCurrentLocation = location.pathname === path;
          return (
            <ListItem
              key={name}
              sx={{
                color: (theme) =>
                  pathIsCurrentLocation ? theme.palette.secondary.main : undefined,
                fontWeight: 'bold',
                backgroundColor: pathIsCurrentLocation ? '#ffffff10' : undefined,
              }}
            >
              <ListItemButton component={BaseLink} selected={pathIsCurrentLocation} to={path}>
                {name}
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
