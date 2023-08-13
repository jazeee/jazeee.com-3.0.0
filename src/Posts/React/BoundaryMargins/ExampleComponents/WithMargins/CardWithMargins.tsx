import { Box } from '@mui/material';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export function CardWithMargins(props: Props) {
  const { children } = props;
  return <Box sx={{ marginBottom: 2, border: '1px solid red' }}>{children}</Box>;
}
