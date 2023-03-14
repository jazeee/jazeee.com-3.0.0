import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { useLocation } from 'react-router-dom';

import { ISideBarLink } from './siteBarItems';
import { BaseLink, ExternalLink } from '../components/Links';

interface Props {
  sideBarItem: ISideBarLink;
}

export function SideBarListItem(props: Props) {
  const { sideBarItem } = props;
  const location = useLocation();
  const { name, path } = sideBarItem;
  const pathIsCurrentLocation = location.pathname === path;
  const pathIsExternal = path.startsWith('http');
  const LinkComponent = pathIsExternal ? ExternalLink : BaseLink;

  return (
    <ListItem
      key={name}
      disablePadding
      sx={{
        color: (theme) => (pathIsCurrentLocation ? theme.palette.secondary.main : undefined),
        fontWeight: 'bold',
        backgroundColor: pathIsCurrentLocation ? '#ffffff10' : undefined,
      }}
    >
      <ListItemButton component={LinkComponent} selected={pathIsCurrentLocation} to={path}>
        {name}
      </ListItemButton>
    </ListItem>
  );
}
