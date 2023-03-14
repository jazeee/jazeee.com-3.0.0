import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

import { SideBarListItem } from './SideBarListItem';
import { SIDE_BAR_PATHS, SIDE_BAR_URLS } from './siteBarItems';

interface Props {
  closeSideBar: () => void;
}

export function SideBar(props: Props) {
  const { closeSideBar } = props;

  return (
    <Box width={250} role="presentation" onClick={closeSideBar} onKeyDown={closeSideBar}>
      <List component="nav">
        {SIDE_BAR_PATHS.map((item) => {
          return <SideBarListItem key={item.path} sideBarItem={item} />;
        })}
        <Divider color="#666" />
        {SIDE_BAR_URLS.map((item) => {
          return <SideBarListItem key={item.path} sideBarItem={item} />;
        })}
      </List>
    </Box>
  );
}
