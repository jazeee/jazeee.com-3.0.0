import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export function SimpleCard(props: Props) {
  const { children } = props;
  return <Box sx={{ border: '1px solid red' }}>{children}</Box>;
}
