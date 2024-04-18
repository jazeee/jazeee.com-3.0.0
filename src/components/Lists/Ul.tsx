import { List } from '@mui/material';
import { ReactNode } from 'react';

interface UlProps {
  children: ReactNode;
}

export function Ul(props: UlProps) {
  const { children } = props;
  return (
    <List
      sx={{
        listStyleType: 'disc',
        listStylePosition: 'inside',
        paddingY: 0,
      }}
    >
      {children}
    </List>
  );
}
