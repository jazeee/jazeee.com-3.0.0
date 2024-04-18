import { ListItem } from '@mui/material';
import { ReactNode } from 'react';

interface LiProps {
  children: ReactNode;
}

export function Li(props: LiProps) {
  const { children } = props;
  return <ListItem sx={{ display: 'list-item', paddingY: 0.25 }}>{children}</ListItem>;
}
