import { List } from '@mui/material';
import { ReactNode } from 'react';

interface OlProps {
  children: ReactNode;
}

export function Ol(props: OlProps) {
  const { children } = props;
  return (
    <List
      sx={{
        listStyleType: 'decimal',
        listStylePosition: 'inside',
        paddingY: 0,
      }}
    >
      {children}
    </List>
  );
}
