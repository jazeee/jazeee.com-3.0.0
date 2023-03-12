import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useLocation } from 'react-router-dom';

import { SIDEBAR_URLS } from './urls';
import { BaseLink } from '../components/Links';
import { SECONDARY_COLOR } from '../utils/colors';

interface Props {
  closeSideBar: () => void;
}

export function SideBar(props: Props) {
  const { closeSideBar } = props;
  const location = useLocation();

  return (
    <Box width={250} role="presentation" onClick={closeSideBar} onKeyDown={closeSideBar}>
      <List>
        {SIDEBAR_URLS.map(({ name, path }) => {
          const isCurrentPath = location.pathname === path;
          return (
            <ListItem
              key={name}
              sx={{
                color: isCurrentPath ? SECONDARY_COLOR : 'inherit',
              }}
              component={BaseLink}
              to={path}
            >
              <ListItemText primary={name} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}
